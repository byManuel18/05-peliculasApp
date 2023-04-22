import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2Page } from './tab2.page';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [Tab2Page],
  imports: [
    CommonModule,
    IonicModule,
    Tab2PageRoutingModule,
    ComponentsModule
  ]
})
export class Tab2Module { }
