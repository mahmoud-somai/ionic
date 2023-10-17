import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneAnnoncePage } from './one-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: OneAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneAnnoncePageRoutingModule {}
