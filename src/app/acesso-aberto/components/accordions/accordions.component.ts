import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
})
export class AccordionsComponent implements OnInit {
  @Input() texto: string = ''

  @Output() numberEvent = new EventEmitter<number>()

  maiorQueZero = false

  numero = 1

  invisivel() {
    if (this.numero > 0) {
      this.numero = this.numero - 1
      this.numberEvent.emit(this.numero);

    } else {
      this.numero = this.numero + 1
      this.numberEvent.emit(this.numero);
    }
  }

  ngOnInit(): void {

  }
}
