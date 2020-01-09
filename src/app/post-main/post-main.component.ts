import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent implements OnInit {

  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() { }

  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }

}
