import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { DividerPipe } from './divider.pipe';
import { ShortPipe } from './short.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    DividerPipe,
    ShortPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagePipe,
    DividerPipe,
    ShortPipe
  ]
})
export class PipesModule { }
