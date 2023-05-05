import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divider'
})
export class DividerPipe implements PipeTransform {

  transform( arr: any[], column: number = 2 ): any[] {

    let pares: any[] = [];

    arr.forEach((_,index) =>{
      if(index % column === 0){
        pares = [...pares, arr.slice(index, index + column)];
      }
    });


    return pares;
 }

}
