import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@shared/shared.module';
import { HttpLoaderFactory } from '@helpers/app.translation-factory';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@env/environment';
import { ApplicationState } from '@store/state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

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
    NgxsModule.forRoot([ApplicationState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: ApplicationState,
    }),
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
