import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {
    baseUri: string;

    apiKey: string = "AIzaSyDqYfPwNQ-l19LCLXqz_K1fL-cgHQpuP_4";
    url:string;
    questions: any;
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http, baseAPIUri: string) {
    }

    getPicture = () => {
        return this.http.get("https://opentdb.com/api.php?amount=10&category=9&type=boolean").map( x =>  x.json());
    }
}


// this.http.get(this.commentsUrl)
//                         // ...and calling .json() on the response to return data
//                          .map((res:Response) => res.json())
//                          //...errors if any
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));