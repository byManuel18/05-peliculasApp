import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Route[] = [
  {
    path: '',
    component: Tab1Page
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class Tab1PageRoutingModule { }
