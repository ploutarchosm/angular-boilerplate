import { Inject, Injectable } from '@angular/core';
import { LocalStoreService } from '@storage/services/local-store.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _language: BehaviorSubject<string>;
  public language$: Observable<string>;
  public languageValue: string;

  constructor(
    @Inject(LANGUAGE_PREFIX) lang: string,
    private localStorage: LocalStoreService
  ) {
    this._language = new BehaviorSubject(
      this.localStorage.get('language') || lang
    );
    this.language$ = this._language.asObservable();
    this.languageValue = this._language.getValue();
  }

  private setLanguageToSubject(lang: string) {
    this._language.next(lang);
  }

  public changeLanguage(lang: string) {
    this.setLanguageToSubject(lang);
  }
}
