import { Component, Input, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements AfterViewInit {
  fromPost: string = 'This message is from the post component';
  receivedMessage: string = '';
  message: string = '';
  name: string = 'Gacheru';
  @Input() fromParent: string = '';

  post: string = 'Second message from post';

  @ViewChild(PostListComponent) childComp?: PostListComponent;

  ngAfterViewInit() {
    if (this.childComp) {
      this.message = this.childComp!.forParent;
    } else {
      ('Empty');
    }
  }

  parentGreet(name: string) {
    alert("Hello " + name);
  }

  @Output() secondGreeting = new EventEmitter<string>();

  callParentEvent() {
    this.secondGreeting.emit(this.name)
  }

  
}
