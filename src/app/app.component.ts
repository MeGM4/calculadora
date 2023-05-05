import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  operadorA:number = 0;
  operadorB:number = 0;
  resultado:number = 0;

  Sumar():void{
    this.resultado = this.operadorA + this.operadorB;
  }
  Restar():void{
    this.resultado = this.operadorA - this.operadorB;
  }
  Multiplicar():void{
    this.resultado = this.operadorA * this.operadorB;
  }
  Dividir():void{
    this.resultado = this.operadorA / this.operadorB;
  }
}
