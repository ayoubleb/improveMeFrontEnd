import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {StoryInfo} from './story-info';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  storyInfo: StoryInfo;
  constructor() { }

  ngOnInit() {
  }
onSubmit()
  this.storyInfo = new StoryInfo(
    this.form.name,
    this.form.username,
    this.form.email,
    this.form.password);

  this.authService.signUp(this.signupInfo).subscribe(
    data => {
  console.log(data);
  this.isSignedUp = true;
  this.isSignUpFailed = false;
},
error => {
  console.log(error);
  this.errorMessage = error.error.message;
  this.isSignUpFailed = true;
}
);

}
