import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  name: string = 'Gacheru';
  @Input() secondPost: string = '';
  
  // @Output() customEvent = new EventEmitter<string>();

  @Output() greet = new EventEmitter<string>();

  callParentEvent() {
    this.greet.emit(this.name);
  }

  // emitEvent() {
  //   this.customEvent.emit('Event from the child component');
  // }

  forParent: string = 'Message from the child';
    
}
