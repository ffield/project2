import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { spotifyModule } from './services/spotify.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, spotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
