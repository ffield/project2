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
  question: string;
  answer: any;
  showResults : boolean = false;
  score : number = 0;
  count : number = 1;

  constructor(private _apiSvc: Spotify) {}

  ngOnInit() {
        this._apiSvc.getPicture().subscribe( results => {
          this.setResults(results);
        });
  }

  setResults = (json:any) => {
    this.results = json.results;
    this.question = this.results[0].question;
    this.answer = this.results[0].correct_answer;
    console.log(this.results);
    this.showFetchedResults();
    var re = /&#039;/gi;
    this.question = this.question.replace(re, "\'");
     var re = /&quot;/gi;
     this.question = this.question.replace(re, '\"');
    this.count = 1;
  }


  showFetchedResults = () => {
    this.showResults = true;
  }

  advanceQuestion(){
    if(this.count < 10){
      this.question = this.results[this.count].question;
      this.answer = this.results[this.count].correct_answer;
      this.count = this.count + 1;
      console.log(this.question);
      console.log(this.answer);
      console.log(this.score);
      var re = /&#039;/gi;
     this.question = this.question.replace(re, "\'");
      var re = /&quot;/gi;
      this.question = this.question.replace(re, '\"');
    }
    

  }

  subFalse(){
    
    
    if(this.answer == "False" && this.count<10){
      this.score = this.score + 1;
      
    }
    this.advanceQuestion();
  }
  
  subTrue(){
    
    if(this.answer == "True" && this.count<10){
      this.score = this.score + 1;
    }
    this.advanceQuestion();
  }


  }
