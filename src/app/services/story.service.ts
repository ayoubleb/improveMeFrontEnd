import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Story} from '../model/story';
import {TokenStorageService} from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private storyUrl = 'http://localhost:8080/api/story';
  constructor ( private http: HttpClient, private token: TokenStorageService ) { }
  username: string = this.token.getUsername();
  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storyUrl + '/all');
  }

  getAllStoriesByOwner(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storyUrl + '/stories/personal/' + this.username);
  }

  deleteStory(id): Observable<any> {
    return this.http.delete<any>(this.storyUrl + '/' + id);
  }

  editStory(data): Observable<any> {
    return this.http.patch<any>(this.storyUrl + '/stories/remove/', data );
  }

}
