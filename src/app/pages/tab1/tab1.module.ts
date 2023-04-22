import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { Tab1Page } from './tab1.page';



@NgModule({
  declarations: [Tab1Page],
  imports: [
    CommonModule,
    IonicModule,
    Tab1PageRoutingModule,
    ComponentsModule
  ]
})
export class Tab1Module { }
