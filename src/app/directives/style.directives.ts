import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";


@Directive({
  selector: '[appStyle]'
})

export class StyleDirectives {
  @Input('appStyle') color: string = ''
  @Input() dStyle: { border?: string, fontWeight?: string, borderRadius?: string }

  @HostBinding('style.color') elColor = null

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(el)
    this.r.setStyle(this.el.nativeElement, 'color', 'pink')

    // el.nativeElement.style.color = 'red'
  }

  @HostListener('click', ['$event.target']) onclick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    // console.log(event)
    this.elColor = this.color
    // this.r.setStyle(this.el.nativeElement, 'color', this.color)
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)

  }

  @HostListener('mouseleave') onLeave() {
this.elColor = null
    // this.r.setStyle(this.el.nativeElement, 'color', null)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
    // this.r.setStyle(this.el.nativeElement, 'border', null)
  }
}
