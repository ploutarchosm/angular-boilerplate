import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { STORE_PREFIX } from '@storage/models/storage.token';
import { StorageModule } from '@storage/storage.module';
import { THEME_PREFIX } from '@theme/models/theme.token';
import { ThemeModule } from '@theme/theme.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGE_PREFIX } from '@shared/models/language.token';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
    {
      provide: LANGUAGE_PREFIX,
      useValue: 'en',
    },
  ],
})
export class AppModule {}
