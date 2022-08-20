import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { StorageModule } from '@storage/storage.module';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { ThemeModule } from '@theme/theme.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageModule.forRoot(),
    ThemeModule.forRoot(),
    SharedModule,
  ],
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
