import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnticonceptivosPage } from './anticonceptivos.page';

const routes: Routes = [
  {
    path: '',
    component: AnticonceptivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnticonceptivosPageRoutingModule {}
