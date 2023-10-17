import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnnoncePageRoutingModule } from './add-annonce-routing.module';

import { AddAnnoncePage } from './add-annonce.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnnoncePageRoutingModule,
  ],
  declarations: [AddAnnoncePage,MenuComponent]
})
export class AddAnnoncePageModule {}
