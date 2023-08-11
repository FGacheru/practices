import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title: string = 'practices';
  parentMessage: string = 'Message Changed';
  postMessage: string = '';

  @ViewChild(PostComponent) postComp!: PostComponent;

  ngAfterViewInit() {
    this.postMessage = this.postComp.fromPost
  }

}
