import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { AffichageComponent } from './affichage/affichage.component';


@NgModule({
  declarations: [
    AffichageComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
