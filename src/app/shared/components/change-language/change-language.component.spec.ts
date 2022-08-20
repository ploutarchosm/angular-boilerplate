import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';
import { ChangeLanguageComponent } from '@shared/components/change-language/change-language.component';
import { LanguageService } from '@shared/services/language.service';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ChangeLanguageComponent', () => {
  let component: ChangeLanguageComponent;
  let fixture: ComponentFixture<ChangeLanguageComponent>;
  let service: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ChangeLanguageComponent],
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
    }).compileComponents();
    service = TestBed.inject(LanguageService);
    fixture = TestBed.createComponent(ChangeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onChange method', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('[data-qa="select-language"')
    ).nativeElement;
    select.selectedIndex = 1;

    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedLanguge).toBe('el');
  });
});
