import { Pipe, PipeTransform } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';

@Pipe({
  name: 'shortPelis'
})
export class ShortPipe implements PipeTransform {

  transform(value: PeliculaDetalle[], genero: Genre): PeliculaDetalle[] {
    const nuevo = value.filter(p=>{
      return !!p.genres.find(g=>g.id===genero.id)
    })

    return nuevo;
  }

}
