import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre, GenreResponse, PeliculaDetalle, RespuestaCredits, RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const Url = environment.Url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private populatePage: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  private executeQuery<T>( query: string){
    query = Url + query;
    query += `api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
    // return this.getMock();
  }

  getFeatures(){
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    let mesString;
    let mes = hoy.getMonth() + 1;

    if(mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.executeQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${final}&`);
  }

  getPopulares(){
    this.populatePage++;
    const query = `/discover/movie/?sort_by=popularity.desc&page=${this.populatePage}&`;
    return this.executeQuery<RespuestaMDB>(query);
  }

  getMock(){
    return this.http.get<RespuestaMDB>('./assets/mockPelis.json')
  }

  getPeliculaDetalle(id: number){
    const query: string = `/movie/${id}?`;
    return this.executeQuery<PeliculaDetalle>(query);
  }

  getActoresPelicula(id: number){
    const query: string = `/movie/${id}/credits?`;
    return this.executeQuery<RespuestaCredits>(query);
  }

  searchPeliculas(query: string = ''){
    const queryUrl: string = `/search/movie?query=${query}&`;
    return this.executeQuery<RespuestaMDB>(queryUrl);
  }

  getGeneros(){
    const query: string = '/genre/movie/list?';

    return new Promise<Genre[]>((resolve)=>{
      this.executeQuery<GenreResponse>(query).subscribe(g=>resolve(g.genres));
    })

  }


}
