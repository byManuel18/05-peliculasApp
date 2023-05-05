import { Component, OnInit, ElementRef, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import Swiper, { SwiperOptions } from 'swiper';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Input() imgType: 'backdrop_path' | 'poster_path' = 'backdrop_path';
  @Input() columns: number = 1;
  @Input() showMoreBtn: boolean = false;
  @ViewChild('swiper') swiperRef!: ElementRef;

  @Output() btnClick = new EventEmitter();
  swiper?: Swiper;

  opciones: SwiperOptions = {}

  constructor(
    private modalCtr: ModalController
  ) { }

  ngOnInit() {
    this.opciones ={
      freeMode: true,
      slidesPerView: this.imgType === 'poster_path' ? 3.3 : 1.1,
    }
  }

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onClick($event: any){
    this.btnClick.emit($event);
  }

  async verDetalle(id: number){
    const modal = await this.modalCtr.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });

    await modal.present();
  }

}
