import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {Story} from '../../model/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private token: TokenStorageService) { }
  @Input() isConnected: string;
  @Input() story: Story;
  @Output() handleclick: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

/*  logout() {
    this.token.signOut();
   // window.location.reload();
    this.router.navigate(['/auth/login']);

  }*/
  sendEvent(id) {
    this.handleclick.emit(id);
  }

}
