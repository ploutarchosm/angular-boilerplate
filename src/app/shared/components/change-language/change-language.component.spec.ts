import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { ChangeLanguageComponent } from '@shared/components/change-language/change-language.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { selectOption } from '@app/__tests__/helper.test';

describe('ChangeLanguageComponent', () => {
  let component: ChangeLanguageComponent;
  let fixture: ComponentFixture<ChangeLanguageComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgxsModule.forRoot([ApplicationState])],
      declarations: [ChangeLanguageComponent],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ChangeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onChange method', () => {
    selectOption(fixture, 'select-language', 1);
    const language = store.selectSnapshot(state => state.app.language);
    expect(language).toBe('el');
  });
});
