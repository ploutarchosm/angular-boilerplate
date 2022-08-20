import { Component, OnInit } from '@angular/core';
import { ThemeStorageService } from '@shared/services/theme-storage.service';
import { ThemeService } from '@theme/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';

  constructor(
    private themeStorageService: ThemeStorageService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe({
      next: val => this.themeStorageService.setTheme(val),
    });
  }
}
