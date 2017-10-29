import { Component } from '@angular/core';
import {Spotify} from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _apiSvc: Spotify) {
  }

}
