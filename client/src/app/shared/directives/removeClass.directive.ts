import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[removeClassDirective]',
})
export class RemoveClassDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }, 100);
  }
}
