import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Post } from '../post';
import { UserService } from '../user.service';

import { ServerService } from '../shared/services/server-interface.service'

import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any = ""
  id: any = ""

  constructor(private userService: UserService, private route: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getPostDetails()
  }

  getPostDetails() {
    const postsObservable = this.serverService.getPostDetails(this.id)
    postsObservable.subscribe((data ) => {
      data = Object.values(data)
      this.post = data[1]
    })
  }

  ngOnDestroy() {

  }
}
