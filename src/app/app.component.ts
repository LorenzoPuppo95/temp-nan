import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data/data.service';
import { TempTime } from './model/temp-time';
import { ProcessingService } from './services/processing/processing.service';
import { MainpageComponent } from "./components/mainpage/mainpage.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-nan';

  dataServ = inject(DataService);
  processingServ = inject(ProcessingService)

  tempArray: TempTime[] = [];
  maxTempTime!: TempTime;
  minTempTime!: TempTime;
  tempMean!: number;

  ngOnInit(){
    this.transformData()
  }

  async transformData(){
    const data = await this.dataServ.getData()
    this.tempArray = this.processingServ.getTempArrayFromHourlyData(data.hourly);
    this.maxTempTime = this.processingServ.getMaxTemp(this.tempArray);
    this.minTempTime = this.processingServ.getMinTemp(this.tempArray);
    this.tempMean = this.processingServ.getTempMean(this.tempArray);
    // console.log('Max Temp:', maxTempTime);
    // console.log('Min Temp:', minTempTime);
    // console.log('Mean Temp:', tempMean);
    // console.log('Temp Array:', tempArray);
  }

}
