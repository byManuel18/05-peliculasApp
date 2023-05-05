import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // encapsulation: ViewEncapsulation.None,

})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];
  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getFeatures().subscribe(respuesta=>{
        this.peliculasRecientes = respuesta.results;
    });

    this.getPopulares();

  }

  cargarMas($event: any){
    this.getPopulares();

  }

  getPopulares (){
    this.moviesService.getPopulares().subscribe(respuesta =>{
      this.peliculasPopulares = [...this.peliculasPopulares, ...respuesta.results];
    })
  }

}
