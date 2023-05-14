import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tours';
  tours = [
    {
      name: 'Tour a la Playa',
      price: 100
    },
    {
      name: 'Tour a la Montaña',
      price: 150
    },
    {
      name: 'Tour a la Ciudad',
      price: 75
    }
  ];
  
  onReserve(tour:any) {
    console.log('Tour reservado:', tour);
  }
}
