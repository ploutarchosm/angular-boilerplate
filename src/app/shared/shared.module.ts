import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeThemeComponent } from '@shared/components/change-theme/change-theme.component';
import { ChangeLanguageComponent } from '@shared/components/change-language/change-language.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ChangeThemeComponent, ChangeLanguageComponent],
  exports: [ChangeThemeComponent, ChangeLanguageComponent],
})
export class SharedModule {}
