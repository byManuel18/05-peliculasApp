import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  pelisGenero: {genero: Genre, pelis: PeliculaDetalle[]}[] = []

  constructor(
    private dataLocal : DataLocalService,
    private movieService: MoviesService,
  ) {}

  async ngOnInit() {
   this.generos = await this.movieService.getGeneros()

   this.dataLocal._peliculas$.subscribe(pls=>{
    this.peliculas = pls;
    this.pelisGeneroBuild(this.generos,this.peliculas);
   })

  }

  pelisGeneroBuild(generos: Genre[], pelis: PeliculaDetalle[]){
    this.pelisGenero = [];
    generos.forEach((genre)=>{
      const pelisFilter = pelis.filter(p=>{
        return !!p.genres.find(g=>g.id===genre.id)
      })
      this.pelisGenero.push({genero: { ...genre }, pelis: [...pelisFilter]})
    })
  }
}
