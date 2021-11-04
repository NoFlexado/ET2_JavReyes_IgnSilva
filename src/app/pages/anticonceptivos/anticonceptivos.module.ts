import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnticonceptivosPageRoutingModule } from './anticonceptivos-routing.module';

import { AnticonceptivosPage } from './anticonceptivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnticonceptivosPageRoutingModule
  ],
  declarations: [AnticonceptivosPage]
})
export class AnticonceptivosPageModule {}
