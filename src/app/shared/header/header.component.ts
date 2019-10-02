import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() authority;
  islogin: any;
  constructor(private login: TokenStorageService) {
    this.islogin = this.login.getToken();
  }

  ngOnInit() {
  }
}
