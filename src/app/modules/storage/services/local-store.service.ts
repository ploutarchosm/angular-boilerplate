import { Inject, Injectable } from '@angular/core';
import { StoreService } from '@storage/services/store.service';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { getBackend } from '@storage/utils/get-backend';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService extends StoreService {
  constructor(@Inject(STORE_PREFIX) prefix: string) {
    super(getBackend('local'), prefix);
  }
}
