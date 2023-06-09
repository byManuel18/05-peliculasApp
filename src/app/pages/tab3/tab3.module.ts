import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { Tab3Page } from './tab3.page';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [Tab3Page],
  imports: [
    CommonModule,
    IonicModule,
    Tab3PageRoutingModule,
    ComponentsModule,
    PipesModule
  ]
})
export class Tab3Module { }
