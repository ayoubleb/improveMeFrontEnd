import { Component, OnInit } from '@angular/core';
import {StoryInfo} from './story-info';
import {StoryService} from '../services/story.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  storyInfo: StoryInfo;
  form: any = {};
  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }
onSubmit() {
  this.storyInfo = new StoryInfo(
    this.form.title,
    this.form.date,
    this.form.place,
    this.form.mood,
    this.form.body);


  this.storyService.addStory(this.storyInfo).subscribe(
    data => {
      console.log(data);
      alert('Story added');
    },
    error => {
      console.log(error);
    }
  );
}
}
