import { TestBed } from '@angular/core/testing';
import { LocalStoreService } from '@storage/services/local-store.service';
import { STORE_PREFIX } from '../models/storage.token';

describe('LocalStoreService', () => {
  let service: LocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: STORE_PREFIX, useValue: 'pm.' }],
    });
    service = TestBed.inject(LocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
