import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import {StoryService} from '../services/story.service';
import {Story} from '../model/story';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  stories: any;
  storiesByUser: Story[];
  isConnected: any = 'info.token';

  constructor(private token: TokenStorageService, private storyservice: StoryService, private router: Router) { }

  ngOnInit() {
    this.storyservice.getAllStoriesByOwner().subscribe(
      data => {
        console.log(data);
        this.storiesByUser = data;
      },
      error => {
        console.log(error);
        // this.errorMessage = error.error.message;
        // this.isSignUpFailed = true;
      }
    );
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

  logout() {
    this.token.signOut();
    // window.location.reload();
    this.router.navigate(['/auth/login']);

  }
}
