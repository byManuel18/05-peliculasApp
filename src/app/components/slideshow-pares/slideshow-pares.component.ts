import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  btnClickEvent($event: any){
    this.btnClick.emit($event);
  }

}
