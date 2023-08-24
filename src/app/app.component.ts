import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  bool: boolean = true;
  title: string = 'practices';
  parentMessage: string = 'Message Changed';
  postMessage: string = '';

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4']

  @ViewChild(PostComponent) postComp!: PostComponent;

  ngAfterViewInit() {
    this.postMessage = this.postComp.fromPost;
  }

  message() {
    alert('Hello from Parent');
  }
  greeting(name: string) {
    alert('Hawayu ' + name);
  }
  onKeyup(user: string){
    // if($event.keyCode == 13){
      console.log(user);

    // }

  }

  constructor(){
    for(let i = 0; i < this.postArray.length; i++ ){
      console.log(this.postArray.at(i));
      
    }
  }
}
