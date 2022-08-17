const fallbackStorages = {
  local: {},
  session: {},
};

export function getBackend(type: 'local' | 'session'): Storage {
  let backend: Storage = (window as { [key: string]: any })[type + 'Storage'];

  try {
    backend.setItem('__test', 'data');
    backend.removeItem('__test');
  } catch (e) {
    const storage = fallbackStorages[type] as any;

    // not supported, fallback
    backend = {
      getItem: (key: string) => storage[key],
      setItem: (key: string, value: any) => (storage[key] = value),
      removeItem: (key: string) => delete storage[key],
    } as any;
  }
  return backend;
}
