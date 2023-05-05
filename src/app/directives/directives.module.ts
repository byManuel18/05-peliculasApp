import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperInitDirective } from './swiper-init.directive';



@NgModule({
  declarations: [SwiperInitDirective],
  imports: [
    CommonModule
  ],
  exports:[SwiperInitDirective]
})
export class DirectivesModule { }
