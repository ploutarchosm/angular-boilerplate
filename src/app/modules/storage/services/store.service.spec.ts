import { TestBed } from '@angular/core/testing';
import { StoreService } from '@storage/services/store.service';

class DummyService extends StoreService {}

describe('StoreService', () => {
  let localStorageInstance: DummyService;
  let SessionStoreInstance: DummyService;

  beforeAll(() => {
    localStorageInstance = new DummyService(localStorage, 'pm');
    SessionStoreInstance = new DummyService(sessionStorage, 'pm');
  });

  it('should be created both storages', () => {
    expect(localStorageInstance).toBeTruthy();
    expect(SessionStoreInstance).toBeTruthy();
  });

  it('should test localStorage', () => {
    // set, get
    localStorageInstance.set('key', 'valueKey');
    const valueKey = localStorageInstance.get('key');
    expect(valueKey).toBe('valueKey');

    // remove, get
    localStorageInstance.remove('key');
    const removed = localStorageInstance.get('key');
    expect(removed).toBe(null);

    // null set
    localStorageInstance.set('key', null);
    const nulled = localStorageInstance.get('key');
    expect(nulled).toBe(null);
  });

  it('should test sessionStorage', () => {
    // set, get
    SessionStoreInstance.set('key', 'valueKey');
    const valueKey = SessionStoreInstance.get('key');
    expect(valueKey).toBe('valueKey');

    // remove, get
    SessionStoreInstance.remove('key');
    const removed = SessionStoreInstance.get('key');
    expect(removed).toBe(null);

    // null set
    SessionStoreInstance.set('key', null);
    const nulled = SessionStoreInstance.get('key');
    expect(nulled).toBe(null);
  });
});
