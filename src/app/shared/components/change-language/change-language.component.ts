import { Component } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent {
  selectedLanguge!: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguge = this.languageService.languageValue;
  }

  onChange(val: string) {
    this.languageService.changeLanguage(val);
  }
}
