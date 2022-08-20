import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '@app/app.component';
import { StorageModule } from '@storage/storage.module';
import { LocalStoreService } from '@storage/services/local-store.service';
import { SessionStoreService } from '@storage/services/session-store.service';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { SharedModule } from '@shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    let localStorage: LocalStoreService;
    let sessionStorage: SessionStoreService;

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StorageModule.forRoot(), SharedModule],
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
      ],
    }).compileComponents();

    localStorage = TestBed.inject(LocalStoreService);
    sessionStorage = TestBed.inject(SessionStoreService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-boilerplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-boilerplate');
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
