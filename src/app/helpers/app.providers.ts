import { Provider } from '@angular/core';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from '@theme/models/theme.token';

export const APP_PROVIDERS: Provider[] = [
  {
    provide: STORE_PREFIX,
    useValue: 'pm.',
  },
  {
    provide: THEME_PREFIX,
    useValue: 'light',
  },
  {
    provide: LANGUAGE_PREFIX,
    useValue: 'en',
  },
];
