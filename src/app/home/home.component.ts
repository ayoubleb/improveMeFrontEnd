import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import {StoryService} from '../services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  stories: any;

  constructor(private token: TokenStorageService, private storyservice: StoryService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.storyservice.getAllStories().subscribe(
      data => {
        console.log(data);
        this.stories = data;
      },
      error => {
        console.log(error);
       // this.errorMessage = error.error.message;
       // this.isSignUpFailed = true;
      }
    );
  }

 /* logout() {
    this.token.signOut();
    window.location.reload();
  }*/
}
