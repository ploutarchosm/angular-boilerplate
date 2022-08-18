import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICustomizedModule } from '@core/models/core';
import { StorageModule } from '@app/modules/storage/storage.module';
import { ThemeModule } from '@app/modules/theme/theme.module';
import { ThemeService } from '@app/modules/theme/services/theme.service';

export class EnsureModuleLoadedOnce {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`
      );
    }
  }
}

@NgModule({
  imports: [CommonModule],
})
export class CoreModule extends EnsureModuleLoadedOnce {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

  public static forRoot(): ICustomizedModule<CoreModule> {
    return {
      ngModule: CoreModule,
      imports: [StorageModule.forRoot(), ThemeModule.forRoot()],
    };
  }
}
