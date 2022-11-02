import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '@app/app.component';
import { LocalStoreService } from '@storage/services/local-store.service';
import { SessionStoreService } from '@storage/services/session-store.service';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    let localStorage: LocalStoreService;
    let sessionStorage: SessionStoreService;

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), SharedModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: STORE_PREFIX,
          useValue: 'pm.',
        },
        {
          provide: THEME_PREFIX,
          useValue: 'light',
        },
        {
          provide: LANGUAGE_PREFIX,
          useValue: 'en',
        },
      ],
    }).compileComponents();

    localStorage = TestBed.inject(LocalStoreService);
    sessionStorage = TestBed.inject(SessionStoreService);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set localStorage key `testKey` and value `testValue`', () => {
    localStorage.setItem('testKey', 'testValue');
    const testKey = localStorage.getItem('testKey');
    expect(testKey).toBe('testValue');
  });

  it('Should set sessionStorage key `testKey` and value `testValue`', () => {
    sessionStorage.setItem('testKey', 'testValue');
    const testKey = sessionStorage.getItem('testKey');
    expect(testKey).toBe('testValue');
  });
});
