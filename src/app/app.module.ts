import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { THEME_PREFIX } from './modules/theme/models/theme.token';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: STORE_PREFIX,
      useValue: 'pm.',
    },
    {
      provide: THEME_PREFIX,
      useValue: 'light',
    },
  ],
})
export class AppModule {}
