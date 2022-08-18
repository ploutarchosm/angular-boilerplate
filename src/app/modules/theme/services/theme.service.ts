import { Inject, Injectable } from '@angular/core';
import { Theme } from '@app/modules/theme/interfaces/theme';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { THEME_PREFIX } from '@theme/models/theme.token';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themes: Theme[] = [
    { name: 'Light', data: 'light' },
    { name: 'Dark', data: 'dark' },
  ];

  private _theme: BehaviorSubject<string>;
  public theme$: Observable<string>;

  constructor(@Inject(THEME_PREFIX) theme: string) {
    this._theme = new BehaviorSubject(theme);
    this.theme$ = this._theme.asObservable();
  }

  private setThemeToSubject(theme: Theme) {
    this._theme.next(theme.data);
  }

  public changeTheme(theme: Theme) {
    this.setThemeToSubject(theme);
  }
}
