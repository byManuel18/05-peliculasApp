import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Route[] = [
  {
    path: '',
    component: Tab2Page
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class Tab2PageRoutingModule { }
