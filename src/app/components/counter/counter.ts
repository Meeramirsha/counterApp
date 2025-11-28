import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { CounterServices } from '../../services/counter-services/counter-services';
@Component({
  selector: 'app-counter',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  faAngular=faAngular;
  constructor(private counterServices: CounterServices){}
  get count(): number {
  return this.counterServices.getcount(); // matches existing method name
}

    

    increment():void{
      this.counterServices.increment();
    }
    decrement():void{
      this.counterServices.decrement();
    }
    reset():void{
      this.counterServices.reset();
    }
}