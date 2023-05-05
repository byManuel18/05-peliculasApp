import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Directive({
  selector: '[appSwiperInit]'
})
export class SwiperInitDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  @Input('opciones')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }


  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);
    // @ts-ignore
    this.el.nativeElement.initialize();
  }

}
