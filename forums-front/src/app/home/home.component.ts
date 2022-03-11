import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

import { ServerService } from '../shared/services/server-interface.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostRecentPosts: any = [];
  mostLikedPosts: any = [];
  users: User[] = [];

  constructor(private userService: UserService, private serverService: ServerService) { }

  ngOnInit(): void {
    this.getMostRecent();
    this.getMostLiked();
  }

  getMostRecent() {
    const postsObservable = this.serverService.getMostRecent()
    postsObservable.subscribe((data ) => {
      data = Object.values(data)
      this.mostRecentPosts= data
    })
  }

  getMostLiked() {
    const postsObservable = this.serverService.getMostLiked()
    postsObservable.subscribe((data ) => {
      data = Object.values(data)
      this.mostLikedPosts = data
    })
  }


}
