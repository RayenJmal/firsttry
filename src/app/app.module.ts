import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {FactureModule} from './facture/facture.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FactureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
