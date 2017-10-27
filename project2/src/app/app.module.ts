import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpotifyModule } from './services/spotify.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'playlist', component: PlaylistComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule, SpotifyModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
