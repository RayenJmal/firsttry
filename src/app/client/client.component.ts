 import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
nom="Ali"
voiture1={
  code:100,
  immat:"2545255",
  color:"black",
  marque:"BMW"
}
tabproduit=[
  {
    codepr:10,
    designation:"télévision",
    prix:1000
  },
  {
    codepr:11,
    designation:"pc lenovo",
    prix:2200
  },
  {
    codepr:12,
    designation:"imprimente epson",
    prix:680
  },

]
modifclient() {
  this.voiture1.immat="111111"
   
}
modif(){
  this.nom="Rayen "
}
}
