import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: any = {};

  constructor() { }

  ngOnInit() {
    this.userProfile = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      numPosts: 10,
      telephone:12345678
    };
  }

}
