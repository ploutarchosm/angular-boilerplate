import { Component } from '@angular/core';
import { ThemeService } from '@theme/services/theme.service';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss'],
})
export class ChangeThemeComponent {
  selectedTheme!: string;

  constructor(private themeService: ThemeService) {
    this.selectedTheme = this.themeService.themeValue;
  }

  onChange(val: string) {
    this.themeService.changeTheme(val);
  }
}
