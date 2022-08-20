import { TestBed } from '@angular/core/testing';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { StorageService } from '@app/shared/services/storage.service';
import { TranslateModule } from '@ngx-translate/core';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: STORE_PREFIX,
          useValue: 'pm.',
        },
        {
          provide: THEME_PREFIX,
          useValue: 'light',
        },
      ],
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
