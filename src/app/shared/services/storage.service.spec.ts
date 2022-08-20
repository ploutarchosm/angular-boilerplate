import { TestBed } from '@angular/core/testing';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { StorageService } from '@app/shared/services/storage.service';
import { TranslateModule } from '@ngx-translate/core';
import { LocalStoreService } from '@storage/services/local-store.service';

describe('StorageService', () => {
  let service: StorageService;
  let localStorage: LocalStoreService;

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
    localStorage = TestBed.inject(LocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger setTheme', () => {
    service.setTheme('dark');
    const theme = localStorage.get('theme');
    expect(theme).toBe('dark');
  });

  it('should trigger setLanguage', () => {
    service.setLanguage('el');
    const language = localStorage.get('language');
    expect(language).toBe('el');
  });
});
