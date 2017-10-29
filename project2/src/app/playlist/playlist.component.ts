import { Component, OnInit } from '@angular/core';
import { Spotify } from '../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  artists: any[] = [ ];
  attributes: any[] = [ ];
  results: any[] = [ ];
  showResults : boolean = false;
  constructor(private _apiSvc: Spotify) {}

  ngOnInit() {
        this._apiSvc.getPicture().subscribe( results => {
          this.setResults(results);
        });
  }

  setResults = (json:any) => {
    this.results = json.results;
    console.log(this.results);
    this.showFetchedResults();
  }


  showFetchedResults = () => {
    this.showResults = true;
  }


  }
