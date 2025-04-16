import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageComponent } from './mainpage.component';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    component.tempMean = 0;
    component.maxTempTime = {time: '', temp: 0};
    component.minTempTime = {time: '', temp: 0};
    component.tempArray = [ { time: '2023-10-01T00:00:00Z', temp: 0 } ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
