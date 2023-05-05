import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;
  ocultar: number = 150;

  @ViewChild('detalleSwiper') swiperRef!: ElementRef;

  swiper?: Swiper;

  pelicula!: PeliculaDetalle;
  actores: Cast[] = [];

  opciones: SwiperOptions = {}

  existe: boolean = false;

  constructor(
    private movieService: MoviesService,
    private modalCtr: ModalController,
    private dataLocal: DataLocalService
  ) { }

  ngOnInit() {

    this.existePeli(this.id);
    this.opciones ={
      freeMode: true,
      slidesPerView:3.3,
    }
    this.movieService.getPeliculaDetalle(this.id).subscribe(resp=>{
      this.pelicula = resp;
    });

    this.movieService.getActoresPelicula(this.id).subscribe(resp=>{
      this.actores = resp.cast;
    });
  }

  existePeli(id: number){
    this.dataLocal.existePelicula(id).then(e=>this.existe = e);
  }

  leerMas(){
    this.ocultar = this.pelicula.overview.length;
  }

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  regresar(){
    this.modalCtr.dismiss();
  }

  favorito(){
    this.existe = this.dataLocal.guardarPelicula(this.pelicula);
  }

}
