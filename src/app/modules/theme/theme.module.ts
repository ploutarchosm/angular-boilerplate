import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThemeService } from '@theme/services/theme.service';

@NgModule({})
export class ThemeModule {
  public static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [ThemeService],
    };
  }
}
