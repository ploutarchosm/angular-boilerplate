export abstract class StoreService {
  constructor(private backend: Storage, private prefix: string) {}

  get(key: string) {
    const item = this.backend.getItem(this.prefix + key);
    if (item) {
      return JSON.parse(item);
    } else {
      return item;
    }
  }

  set(key: string, value: any) {
    if (value == null) {
      this.backend.removeItem(this.prefix + key);
    } else {
      this.backend.setItem(this.prefix + key, JSON.stringify(value));
    }
  }

  remove(key: string) {
    this.backend.removeItem(this.prefix + key);
  }
}
