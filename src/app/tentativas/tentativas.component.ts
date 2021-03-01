import { coracao } from './../shared/coracao.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html'
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: coracao[] = [
    new coracao(true), new coracao(true), new coracao(true)
  ]

  constructor() {}

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }   
  }

  ngOnInit(){}
}
