import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Route[] =[
  {
    path: '',
    component: Tab3Page
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class Tab3PageRoutingModule { }
