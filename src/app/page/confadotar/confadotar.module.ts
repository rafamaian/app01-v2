import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfadotarPageRoutingModule } from './confadotar-routing.module';

import { ConfadotarPage } from './confadotar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfadotarPageRoutingModule
  ],
  declarations: [ConfadotarPage]
})
export class ConfadotarPageModule {}
