import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  displayOne: number = 0;
  displayTwo: number = 0;

  result: number = 0

  randomNumber(displayer: number): number {
    if (displayer === 1) {
      return this.displayOne = Math.floor(Math.random() * 100);
    } else {
      return this.displayTwo = Math.floor(Math.random() * 100);
    }
  }
  calculate(operator: string) {
    switch (operator) {
      case '+':
        this.result = this.displayOne + this.displayTwo;
        break;
      case '-':
        this.result = this.displayOne - this.displayTwo;
        break;
      case '*':
        this.result = this.displayOne * this.displayTwo;
        break
      case '/':
        this.result = this.displayOne / this.displayTwo;
        break
    }
  }

}
