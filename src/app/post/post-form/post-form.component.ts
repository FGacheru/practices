import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  postTitle: string = '';
  postDetails: string = '';
  imageURL: string = '';
  postURL: string = '';
  addBackground: boolean = false;

}
