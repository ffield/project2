import { Component } from '@angular/core';
import {spotify} from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _apiSvc: spotify) {
    _apiSvc.getPlaylists(1);
    _apiSvc.getNewReleases(1);
  }
    ngOnInit() {
      console.log('yo');
    }
}
