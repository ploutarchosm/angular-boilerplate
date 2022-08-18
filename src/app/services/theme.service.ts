import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Theme } from '@app/interfaces/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themes: Theme[] = [
    { name: 'Light', data: 'light' },
    { name: 'Dark', data: 'dark' },
  ];

  private _theme = new BehaviorSubject('light');
  public theme$ = this._theme.asObservable();
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private setThemeToBodyAttribute(theme: Theme) {
    this.renderer.setAttribute(this.document.body, 'data-theme', theme.data);
  }

  private setThemeToSubject(theme: Theme) {
    this._theme.next(theme.data);
  }

  public changeTheme(theme: Theme) {
    this.setThemeToSubject(theme);
    this.setThemeToBodyAttribute(theme);
  }
}
