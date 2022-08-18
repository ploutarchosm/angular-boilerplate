import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocalStoreService } from '@storage/services/local-store.service';
import { SessionStoreService } from '@storage/services/session-store.service';

@NgModule()
export class StorageModule {
  public static forRoot(): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [LocalStoreService, SessionStoreService],
    };
  }
}
