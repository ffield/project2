import { Http, HttpModule } from '@angular/http';
import { spotify } from './spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function spotifyFactory(http: Http){
    return new spotify(http, 'https://api.spotify.com');
}

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide: spotify, useFactory: spotifyFactory, deps: [Http]}],
    declarations: []
})
export class spotifyModule { }