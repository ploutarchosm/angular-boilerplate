import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LocalStoreService } from '@storage/services/local-store.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeStorageService {
  private renderer: Renderer2;

  constructor(
    private localStorage: LocalStoreService,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public setTheme(theme: string) {
    this.localStorage.set('theme', theme);
    this.renderer.setAttribute(this.document.body, 'data-theme', theme);
  }
}
