import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './tabs.routes';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class TabsPageRoutingModule { }
