import { InjectionToken } from '@angular/core';

/**
 * Prefix used by {@link SessionStoreService} and {@link LocalStoreService}.
 *
 * @stable
 */
export const STORE_PREFIX = new InjectionToken<string>('store-prefix');
