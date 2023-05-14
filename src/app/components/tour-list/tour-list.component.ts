import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  @Input() tour: any;
  @Output() reserve = new EventEmitter<any>();

  reserveTour() {
    localStorage.setItem('reservedTour', JSON.stringify(this.tour));
    this.reserve.emit(this.tour);
  }

}
