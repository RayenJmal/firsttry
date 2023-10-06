import { Component } from '@angular/core';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
  })

export class AffichageComponent {
  items:any= [{
    name: 'ordinateur',
    description: 'hp core i7 10th gen',
    qty: 5,
    price: 2900,
    },
    {
    name: 'imprimante',
    description: 'epson laserJet',
    qty: 4,
    price: 500,
    }] ;
    add = () => {
      this.items.push({
      name: '',
      description: '',
      qty: 1,
      price: 0
      });
      }
      remove = (index:any)=>{
      this.items.splice(index, 1);
      }
      
      total = ()=>{
        var total = 0;
        this.items.map((item:any)=>{
        total += item.qty * item.price;
        })
        return total;
        }
}

