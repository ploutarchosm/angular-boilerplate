import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { StorageModule } from '@storage/storage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StorageModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
