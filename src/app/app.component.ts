import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '@storage/services/local-store.service';
import { ThemeService } from '@theme/services/theme.service';
import { combineLatest, Observable, of, first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';
  merge$: Observable<[string | undefined, string]>;

  constructor(localStorage: LocalStoreService, themeService: ThemeService) {
    const currentTheme$ = of(localStorage.get('theme')); // if theme is setup to the localStorage
    const defaultTheme$ = themeService.theme$; // get default theme
    this.merge$ = combineLatest([currentTheme$, defaultTheme$]);
  }

  ngOnInit(): void {
    console.log('Setup theme to the dom at init');
    /**
     *
     * Setup theme to the DOM here
     */
  }
}

// .subscribe(([c, d]) => !c && localStorage.set('theme', d));
