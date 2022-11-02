import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { ApplicationActions } from '@store/actions';
import { AppStateModel } from '@store/store.model';

const APP_STATE_TOKEN = new StateToken<string>('app');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: {
    language: 'en',
    theme: 'dark',
  },
})
@Injectable()
export class ApplicationState {
  @Action(ApplicationActions.ChangeLanguage)
  changeLanguage(ctx: StateContext<AppStateModel>, data: { payload: string }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      language: data.payload,
    });
  }

  @Action(ApplicationActions.ChangeTheme)
  changeTheme(ctx: StateContext<AppStateModel>, data: { payload: string }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      theme: data.payload,
    });
  }
}
