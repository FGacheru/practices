import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit{

  fromPost: string = 'This message is from the post component';

  message: string = '';
  @Input() fromParent: string = '';

  post: string = "Second message from post";

  @ViewChild(PostListComponent) childComp?: PostListComponent;

  constructor() {

  }

  ngAfterViewInit() {
    if(this.childComp){
      this.message = this.childComp!.forParent
    } else {
      'Empty'
    }
  }

}
