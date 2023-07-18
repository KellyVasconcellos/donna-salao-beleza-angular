import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendarioco',
  templateUrl: './calendarioco.component.html',
  styleUrls: ['./calendarioco.component.scss']
})
export class CalendariocoComponent {
	model!: NgbDateStruct;
	date!: { year: number; month: number };

	constructor(private calendar: NgbCalendar) {}

	selectToday() {
		this.model = this.calendar.getToday();
	}
}
