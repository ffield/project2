import { Component, OnInit } from '@angular/core';
import { Spotify } from '../services/spotify.service';
import { DialogService } from 'ng2-bootstrap-modal';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  artists: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: Spotify, private _dialogService: DialogService) {
    _apiSvc.getPlaylists(1).subscribe(x => {
      console.log(this);
   });
  }
}
