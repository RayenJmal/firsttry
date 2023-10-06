import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';

const routes: Routes = [

 { path:'afffact', component: AffichageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
