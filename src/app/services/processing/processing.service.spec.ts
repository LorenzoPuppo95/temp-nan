import { TestBed } from '@angular/core/testing';

import { ProcessingService } from './processing.service';

describe('ProcessingService', () => {
  let service: ProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert Fahrenheit to Celsius', () => {
    expect(service.fromFtoC(32)).toEqual(0);
  });

  it('should convert hourly object to tempTime Array', () => {
    const hourlyObj = {
      time: ['2023-10-01T00:00:00Z', '2023-10-01T01:00:00Z'],
      temp: [32, 50]
    };
    expect(service.getTempArrayFromHourlyData(hourlyObj)).toEqual([
      { time: '2023-10-01T00:00:00Z', temp: 0 },
      { time: '2023-10-01T01:00:00Z', temp: 10 }
    ]);
  });
});
