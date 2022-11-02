import {
  Component,
  Inject,
  OnInit,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppStateModel } from '@store/store.model';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private renderer: Renderer2;
  title = 'angular-boilerplate';
  state$: Observable<AppStateModel> = this.store.select<AppStateModel>(
    state => state.app
  );

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private translation: TranslateService,
    private store: Store
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
    this.state$.subscribe({
      next: res => {
        this.renderer.setAttribute(this.document.body, 'data-theme', res.theme);
        this.translation.setDefaultLang(res.language);
      },
      error: err => {
        throw new Error(err);
      },
    });
  }
}
