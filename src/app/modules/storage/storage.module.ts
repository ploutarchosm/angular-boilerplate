import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocalStoreService } from '@storage/services/local-store.service';
import { SessionStoreService } from '@storage/services/session-store.service';
import { STORE_PREFIX } from '@storage/models/storage.token';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class StorageModule {
  public static forRoot(options?: {
    prefix: string;
  }): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        LocalStoreService,
        SessionStoreService,
        { provide: STORE_PREFIX, useValue: options?.prefix ?? 'pm.' },
      ],
    };
  }
}
