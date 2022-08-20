import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/shared/services/storage.service';
import { ThemeService } from '@theme/services/theme.service';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';

  constructor(
    private storageService: StorageService,
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe({
      next: val => this.storageService.setTheme(val),
    });
    this.languageService.language$.subscribe({
      next: val => this.storageService.setLanguage(val),
    });
  }
}
