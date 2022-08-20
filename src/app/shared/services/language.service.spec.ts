import { TestBed } from '@angular/core/testing';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { LanguageService } from '@shared/services/language.service';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: STORE_PREFIX,
          useValue: 'pm.',
        },
        {
          provide: LANGUAGE_PREFIX,
          useValue: 'en',
        },
      ],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
