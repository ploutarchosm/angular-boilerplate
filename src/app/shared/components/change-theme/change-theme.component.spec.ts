import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangeThemeComponent } from '@shared/components/change-theme/change-theme.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { find, selectOption } from '@app/__tests__/helper.test';

describe('ChangeThemeComponent', () => {
  let component: ChangeThemeComponent;
  let fixture: ComponentFixture<ChangeThemeComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgxsModule.forRoot([ApplicationState])],
      declarations: [ChangeThemeComponent],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onChange method', () => {
    selectOption(fixture, 'select-theme', 1);
    const theme = store.selectSnapshot(state => state.app.theme);
    expect(theme).toBe('dark');
  });
});
