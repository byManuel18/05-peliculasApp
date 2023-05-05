import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL_IMGS: string = 'https://image.tmdb.org/t/p/';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  transform(img?: string, size: string = 'w500'): string {

    if(!img){
      return environment.imgPath;
    }

    const url = `${URL_IMGS}${size}${img}`;

    return url;
  }

}
