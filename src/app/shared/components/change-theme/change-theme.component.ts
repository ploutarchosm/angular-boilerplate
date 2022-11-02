import { Component } from '@angular/core';
import { ApplicationActions } from '@store/actions';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ApplicationState } from '@store/state';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss'],
})
export class ChangeThemeComponent {
  selectedTheme$: Observable<string> = this.store.select<string>(
    state => state.app.theme
  );

  constructor(private store: Store) {}

  onChange(val: string) {
    this.store.dispatch(new ApplicationActions.ChangeTheme(val));
  }
}
