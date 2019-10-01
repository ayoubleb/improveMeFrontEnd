import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Story} from '../model/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private storyUrl = 'http://localhost:8080/api/story';

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storyUrl + '/all');
  }
  //addStory
  ///owner/{id}

  //    @PutMapping("/{id}")
  //     public ResponseEntity<Story> updateStory(@RequestBody Story story, @PathVariable long id)

}
