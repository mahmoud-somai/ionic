import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAnnoncesPage } from './all-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AllAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAnnoncesPageRoutingModule {}
