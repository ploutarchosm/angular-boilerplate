import { TestBed } from '@angular/core/testing';
import { SessionStoreService } from '@storage/services/session-store.service';
import { STORE_PREFIX } from '@storage/models/storage.token';

describe('SessionStoreService', () => {
  let service: SessionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: STORE_PREFIX, useValue: 'pm.' }],
    });
    service = TestBed.inject(SessionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
