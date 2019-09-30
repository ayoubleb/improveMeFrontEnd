import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PmComponent} from './pm.component';

const routes: Routes = [
  { path: 'pm', component: PmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PmRoutingModule { }
