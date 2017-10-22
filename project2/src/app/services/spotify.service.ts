import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class spotify {
    baseUri: string;
    limit = 100;
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http, baseAPIUri: string) {
        this.baseUri = baseAPIUri;
    }

getPlaylists = (page: number) => {
    this.http.get(
    this.baseUri + '/v1/browse/featured-playlists',
    {   headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
        })
    }


getNewReleases = (page: number) => {
    this.http.get(
    this.baseUri + '/v1/browse/new-releases',
    {   headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
        })
    }
} 