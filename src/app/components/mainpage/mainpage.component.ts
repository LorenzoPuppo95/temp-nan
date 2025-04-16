import { Component, Input } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Component({
  selector: 'app-mainpage',
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  @Input() tempArray!: TempTime[];
  @Input() maxTempTime!: TempTime;
  @Input() minTempTime!: TempTime;
  @Input() tempMean!: number;
}
