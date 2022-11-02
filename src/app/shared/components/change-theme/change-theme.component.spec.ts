import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangeThemeComponent } from '@shared/components/change-theme/change-theme.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState } from '@store/state';

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
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('[data-qa="select-theme"')
    ).nativeElement;
    select.selectedIndex = 1;

    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const lightBlue = store.selectSnapshot(state => state.app.theme);
    expect(lightBlue).toBe('dark');
  });
});
