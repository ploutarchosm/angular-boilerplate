import { ComponentFixture, TestBed } from '@angular/core/testing';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { ThemeService } from '@theme/services/theme.service';
import { ChangeThemeComponent } from '@shared/components/change-theme/change-theme.component';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { FormsModule } from '@angular/forms';

describe('ChangeThemeComponent', () => {
  let component: ChangeThemeComponent;
  let fixture: ComponentFixture<ChangeThemeComponent>;
  let service: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ChangeThemeComponent],
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

    service = TestBed.inject(ThemeService);
    fixture = TestBed.createComponent(ChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
