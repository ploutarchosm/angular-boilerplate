import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from '@app/services/theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let renderer: Renderer2;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [Renderer2],
    }).compileComponents();
    service = TestBed.inject(ThemeService);
    renderer = TestBed.inject(Renderer2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(renderer).toBeTruthy();
  });

  it('should set Dark Theme', () => {
    service.changeTheme({ name: 'Dark', data: 'dark' });
    service.theme$.subscribe(el => expect(el).toBe('dark'));
  });
});
