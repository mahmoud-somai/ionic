import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneAnnoncePageRoutingModule } from './one-annonce-routing.module';

import { OneAnnoncePage } from './one-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneAnnoncePageRoutingModule
  ],
  declarations: [OneAnnoncePage]
})
export class OneAnnoncePageModule {}
