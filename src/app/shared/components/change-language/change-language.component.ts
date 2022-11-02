import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ApplicationActions } from '@app/store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent {
  selectedLanguge$: Observable<string> = this.store.select<string>(
    state => state.app.language
  );

  constructor(private store: Store) {}

  onChange(val: string) {
    this.store.dispatch(new ApplicationActions.ChangeLanguage(val));
  }
}
