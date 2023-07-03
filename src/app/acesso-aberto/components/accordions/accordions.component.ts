import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
})
export class AccordionsComponent implements OnInit {
  @Input() texto: string = '';

  @Output() numberEvent = new EventEmitter<number>();

  maiorQueZero = false;

  numero = 1;

  invisivel() {
    let botao: any = document.querySelector('.botao');
    if (this.numero > 0) {
      this.numero = this.numero - 1;
      this.numberEvent.emit(this.numero);
      botao.style.boxShadow = '0 0 0 2px white';
      botao.style.borderColor = 'white';
    } else {
      this.numero = this.numero + 1;
      this.numberEvent.emit(this.numero);
      botao.style.boxShadow = '0 0 0 2px #ecc0c3';
      botao.style.borderColor = '#f9757e';
    }

  }

  ngOnInit(): void {}
}
