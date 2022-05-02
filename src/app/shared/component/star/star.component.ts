import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


//PARA PASSAR INFORMAÇOES HTTP PARA O COMPONENTE, ASSIM QUE RECEBER UMA INFORMAÇÃO
export class StarComponent implements OnChanges {

  @Input() //ESSA NOTAÇÃO PERMITE QUE A VARIAVEL FIQUE ELEGIVEL PARA RECEBER INFORMAÇÃO DE UM COMPONENTE EXTERNO

  rating: number = 0;

  starWidth!: number ; //TAMANHO DO COMPONETE


  ngOnChanges(): void {
    //instalar o modulo   "npm install font-awesome" ( para layout de estrelas)
    this.starWidth = this.rating * 74 / 5;

  }

}
