export namespace ApplicationActions {
  export class ChangeTheme {
    static readonly type = '[Action] Change theme';
    constructor(public payload: string) {}
  }

  export class ChangeLanguage {
    static readonly type = '[Action] Change Langauge';
    constructor(public payload: string) {}
  }
}
