import { DebugElement, Predicate } from '@angular/core';
import { ComponentFixture, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

function byDataQa(dataQa: string): Predicate<DebugElement> {
  return By.css(`[data-qa="${dataQa}"]`);
}

export function find<T>(
  fixture: ComponentFixture<T>,
  dataQa: string
): DebugElement {
  return fixture.debugElement.query(byDataQa(dataQa));
}

export function selectOption<T>(
  fixture: ComponentFixture<T>,
  dataQaPath: string,
  arrowDowns: number
) {
  const select = find(fixture, dataQaPath);
  select.nativeElement.selectedIndex = arrowDowns;

  select.nativeElement.dispatchEvent(new Event('change'));
  fixture.detectChanges();
}
