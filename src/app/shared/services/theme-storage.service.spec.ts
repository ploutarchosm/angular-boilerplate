import { TestBed } from '@angular/core/testing';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { ThemeStorageService } from '@shared/services/theme-storage.service';

describe('ThemeStorageService', () => {
  let service: ThemeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    service = TestBed.inject(ThemeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
