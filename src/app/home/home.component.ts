import {Component, OnDestroy, OnInit} from '@angular/core';


import { TokenStorageService } from '../auth/token-storage.service';
import {StoryService} from '../services/story.service';
import {Story} from '../model/story';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  info: any;
  stories: any;
  storiesByUser: Story[];
  isConnected: any = 'info.token';

  constructor(private token: TokenStorageService, private storyservice: StoryService, private router: Router) { }
  private subscriptions = new Subscription();
  ngOnInit() {
    this.subscriptions.add(  this.storyservice.getAllStoriesByOwner().subscribe(
      data => {
        console.log(data);
        this.storiesByUser = data;
      },
      error => {
        console.log(error);
        // this.errorMessage = error.error.message;
        // this.isSignUpFailed = true;
      }
    ));
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

/*    this.storyservice.getAllStories().subscribe(
      data => {
        console.log(data);
        this.stories = data;
      },
      error => {
        console.log(error);
       // this.errorMessage = error.error.message;
       // this.isSignUpFailed = true;
      }
    );*/


  }
  weRemove(id: any) {
    this.storyservice.deleteStory(id).subscribe(
      () => console.log('deleted'),
      error1 => console.log(error1));
    window.location.reload();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  logout() {
    this.subscriptions.unsubscribe();
    this.token.signOut();
   // window.location.reload();
    this.router.navigateByUrl('auth/login');
    //window.location.reload();
  }
}
