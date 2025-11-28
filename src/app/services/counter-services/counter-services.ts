import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CounterServices {
  private count=0;
  getcount():number{
    return this.count;
  }

  increment():void{
    this.count++;
  }
  decrement():void{
    this.count--;
  }
  reset():void{
    this.count=0;
  }
}
