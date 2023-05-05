import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private peliculas: PeliculaDetalle[] = [];

  private _storage: Storage | null = null;

  _peliculas$: BehaviorSubject<PeliculaDetalle[]> = new BehaviorSubject<PeliculaDetalle[]>([])


  constructor(
    private storage: Storage,
    private toastController: ToastController
    ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.cargarFavoritos();
  }

  guardarPelicula(peli: PeliculaDetalle){
    let existe: boolean = false;
    let msg: string = 'Añadida a Favoritos!';
    let agregado : boolean = false;
    existe = !!this.peliculas.find((p)=> p.id === peli.id);
    if(existe){
      this.peliculas = this.peliculas.filter((p)=> p.id !== peli.id);
      msg = 'Quitada de favoritos!';
    }else{
      this.peliculas.push(peli);
      agregado = true;
    }
    this._storage?.set('peliculas',this.peliculas);

    this.presentToast('top',msg);

    this._peliculas$.next(this.peliculas);

    return agregado;
  }

  async cargarFavoritos(){
    const peliculas = await this._storage?.get('peliculas');
    this.peliculas = peliculas || [];
    this._peliculas$.next(this.peliculas);
  }

  async existePelicula(id: number){
    await this.cargarFavoritos();
    const exist = this.peliculas.find(p=>p.id === id);
    return !!exist;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
