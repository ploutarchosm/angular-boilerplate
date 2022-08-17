import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themes = ['dark-theme', 'light-theme'];
  private _theme = new BehaviorSubject('light-theme');
  public theme$ = this._theme.asObservable();

  change(dataTheme: string) {
    this._theme.next(dataTheme);
  }
}
