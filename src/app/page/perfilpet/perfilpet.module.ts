import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilpetPageRoutingModule } from './perfilpet-routing.module';

import { PerfilpetPage } from './perfilpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilpetPageRoutingModule
  ],
  declarations: [PerfilpetPage]
})
export class PerfilpetPageModule {}
