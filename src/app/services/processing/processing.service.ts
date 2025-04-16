import { Injectable } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {

  constructor() { }

  getTempArrayFromHourlyData(hourly: any): TempTime[] {
    let tempArray: TempTime[] = [];
    const hourlyArray = Object.values(hourly);
    for (let i = 0; i < (hourlyArray[0] as string[]).length; i++){
      const time = (hourlyArray[0] as string[])[i];
      const temp = this.fromFtoC((hourlyArray[1] as number[])[i]);
      tempArray.push({
        time: time,
        temp: temp
      });
    }
    return tempArray;
  }

  getMinTemp(tempArray: TempTime[]): TempTime {
    if (tempArray.length === 0) {
      throw new Error('tempArray is empty');
    }
    const minTempObj = tempArray.reduce((min, current) => {
      return current.temp < min.temp ? current : min;
    });
    return minTempObj;
  }
  getTempMean(tempArray: TempTime[]): number {
    const temps = tempArray.map(item => item.temp);
    const sum = temps.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / temps.length;
    return Math.round(mean * 100) / 100;;
  }
  getMaxTemp(tempArray: TempTime[]): TempTime {
    if (tempArray.length === 0) {
      throw new Error('tempArray is empty');
    }
    const maxTempObj = tempArray.reduce((max, current) => {
      return current.temp > max.temp ? current : max;
    });
    return maxTempObj;
  }

  fromFtoC(f: number): number{
    let tempC = (f - 32) / (9/5);
    tempC = Math.round(tempC * 10) / 10;
    return tempC;
  }
}
