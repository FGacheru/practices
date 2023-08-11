import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input() fromPost: string = '';
  @Input() secondPost: string = '';

  forParent: string = 'Message from the child';
    
}
