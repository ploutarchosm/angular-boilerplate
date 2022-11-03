import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { Store } from '@ngxs/store';
import { ApplicationActions } from '@store/actions';
import SpyInstance = jest.SpyInstance;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;
  let storeSpy: SpyInstance;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        SharedModule,
        NgxsModule.forRoot([ApplicationState]),
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should changed language to DE', () => {
    store.dispatch(new ApplicationActions.ChangeLanguage('de'));
    const de = store.selectSnapshot(state => state.app.language);
    expect(de).toBe('de');
  });

  it('Should changed theme to light-blue', () => {
    store.dispatch(new ApplicationActions.ChangeTheme('light-blue'));
    const lightBlue = store.selectSnapshot(state => state.app.theme);
    expect(lightBlue).toBe('light-blue');
  });
});
