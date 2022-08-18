import { TestBed } from '@angular/core/testing';
import { ThemeService } from '@app/modules/theme/services/theme.service';
import { THEME_PREFIX } from '@theme/models/theme.token';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService, { provide: THEME_PREFIX, useValue: 'light' }],
    }).compileComponents();
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set Dark Theme', () => {
    service.changeTheme({ name: 'Dark', data: 'dark' });
    service.theme$.subscribe(el => expect(el).toBe('dark'));
  });
});
