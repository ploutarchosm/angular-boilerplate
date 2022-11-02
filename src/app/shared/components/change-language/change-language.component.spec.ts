import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangeLanguageComponent } from '@shared/components/change-language/change-language.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState } from '@store/state';

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

  // it('should test onChange method', () => {
  //   const select: HTMLSelectElement = fixture.debugElement.query(
  //     By.css('[data-qa="select-language"')
  //   ).nativeElement;
  //   select.selectedIndex = 1;

  //   select.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();
  // });
});
