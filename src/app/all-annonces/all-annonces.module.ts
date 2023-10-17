import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAnnoncesPageRoutingModule } from './all-annonces-routing.module';

import { AllAnnoncesPage } from './all-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAnnoncesPageRoutingModule
  ],
  declarations: [AllAnnoncesPage]
})
export class AllAnnoncesPageModule {}
