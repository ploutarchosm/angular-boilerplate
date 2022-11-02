import { Inject, Injectable } from '@angular/core';
import { Theme } from '@theme/interfaces/theme';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { LocalStoreService } from '@storage/services/local-store.service';

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
  public themeValue: string;

  constructor(
    @Inject(THEME_PREFIX) theme: string,
    private localStorage: LocalStoreService
  ) {
    this._theme = new BehaviorSubject(this.localStorage.get('theme') || theme);
    this.theme$ = this._theme.asObservable();
    this.themeValue = this._theme.getValue();
  }

  private setThemeToSubject(theme: string) {
    this._theme.next(theme);
  }

  public changeTheme(theme: string) {
    this.setThemeToSubject(theme);
  }
}
