import { Component } from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";
import {LocalCountingService} from "../services/local-counting.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers:[LocalCountingService]
})
export class CounterComponent{

  constructor(
    private appCounterService: AppCounterService,
    private localCountingService: LocalCountingService
  ) { }

}
