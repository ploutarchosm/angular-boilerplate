import { TestBed } from '@angular/core/testing';
import { LocalStoreService } from '@storage/services/local-store.service';
import { ThemeService } from '@theme/services/theme.service';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { STORE_PREFIX } from '@storage/models/storage.token';

describe('ThemeService', () => {
  let service: ThemeService;
  let localStoreService: LocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        {
          provide: STORE_PREFIX,
          useValue: 'pm.',
        },
        {
          provide: THEME_PREFIX,
          useValue: 'light',
        },
      ],
    }).compileComponents();
    service = TestBed.inject(ThemeService);
    localStoreService = TestBed.inject(LocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set Dark Theme', () => {
    service.changeTheme('dark');
    service.theme$.subscribe(el => expect(el).toBe('dark'));
  });
});
