import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '@app/services/theme.service';
import { Subscription } from 'rxjs';
import { LocalStoreService } from '@storage/services/local-store.service';
import { Theme } from './interfaces/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-boilerplate';
  subscription = new Subscription();

  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalStoreService
  ) {}

  ngOnInit(): void {
    // this.themeService.changeTheme({ name: 'Dark', data: 'dark' });
    this.subscription.add(
      this.themeService.theme$.subscribe(defaultTheme => {
        this.localStorageService.set('theme', defaultTheme);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
