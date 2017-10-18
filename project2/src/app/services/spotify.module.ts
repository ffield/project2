import { Http, HttpModule } from '@angular/http';
import { spotify } from './spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function spotifyFactory(http: Http){
  return new spotify(http, 'http://ws.audioscrobbler.com/2.0');
}

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [{provide: spotify, useFactory: spotifyFactory, deps: [Http]}],
  declarations: []
})
export class spotifyModule { }