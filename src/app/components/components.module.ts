import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from './explore-container/explore-container.component';



@NgModule({
  declarations: [ExploreContainerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ExploreContainerComponent]
})
export class ComponentsModule { }
