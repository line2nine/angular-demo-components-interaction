import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  color = '#ff0019';
  iconStyle = 'fa fa-heart-o';
  likes: number = 0;
  dislikes: number = 0;

  likeThis() {
    if (!this.likes) {
      this.likes++;
      this.iconStyle = 'fa fa-heart';
    } else {
      this.likes--;
      this.iconStyle = 'fa fa-heart-o';
    }
    console.log(this.likes);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
