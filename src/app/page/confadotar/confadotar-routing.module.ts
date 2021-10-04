import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfadotarPage } from './confadotar.page';

const routes: Routes = [
  {
    path: '',
    component: ConfadotarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfadotarPageRoutingModule {}
