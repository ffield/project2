import { TestBed, inject } from '@angular/core/testing';
import { Spotify } from './spotify.service';

describe('SpotifyService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Spotify]
        });
    });

    it('should be created', inject([Spotify], (service: Spotify) => {
        expect(service).toBeTruthy();
    }));
});