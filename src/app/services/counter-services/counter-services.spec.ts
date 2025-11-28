import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterServices } from './counter-services';

describe('CounterServices', () => {
  let component: CounterServices;
  let fixture: ComponentFixture<CounterServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
