import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  textoBuscar: string = '';

  ideas: string[] = ['Spiderman', 'Avengers', 'La vida es bella', 'El señor de los anillos'];

  resultadoPelis: Pelicula[] = [];

  isLoading: boolean = false;

  constructor(
    private movieService: MoviesService,
    private modalCtr: ModalController
  ) { }

  handleInput($event: any) {
    const valor: string = $event.detail.value;
    if(valor.trim().length === 0 && !$event.detail.event){
      this.resultadoPelis = [];
    }
    this.search(valor);
  }

  clickIdea(idea: string) {
    this.textoBuscar = idea;
    this.search(this.textoBuscar);
  }

  search(query: string) {
    if (query.trim().length === 0) {
      return;
    }
    this.isLoading = true;
    this.movieService.searchPeliculas(query.trim()).subscribe(resp => {
      console.log(resp.results);
      this.resultadoPelis = resp.results;

    },err=>{},()=>this.isLoading = false)
  }

  async openDetalle(id:number){
    const modalOpen = await this.modalCtr.create({component: DetalleComponent,componentProps:{id}});

    await modalOpen.present();
  }

}
