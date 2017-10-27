import { Http, HttpModule } from '@angular/http';
import { Spotify } from './spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function spotifyFactory(http: Http) {
    return new Spotify(http, 'https://api.spotify.com');
}

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide: Spotify, useFactory: spotifyFactory, deps: [Http]}],
    declarations: []
})
export class SpotifyModule { }
