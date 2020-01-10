import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output, ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class PostMainComponent implements OnInit, OnDestroy {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() {
  }

  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }

  ngOnDestroy(): void {
console.log('onDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }


}
