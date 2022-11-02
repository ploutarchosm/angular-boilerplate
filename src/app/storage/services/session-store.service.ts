import { Inject, Injectable } from '@angular/core';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { StoreService } from '@storage/services/store.service';
import { getBackend } from '@storage/utils/get-backend';

@Injectable({
  providedIn: 'root',
})
export class SessionStoreService extends StoreService {
  constructor(@Inject(STORE_PREFIX) prefix: string) {
    super(getBackend('session'), prefix);
  }
}
