import { Component } from '@angular/core';

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.css']
})
export class HomeGameComponent {
  constructor() {
  }

  user_choice: string = '';
  res: string | null = null;
  res_txt: string | null = null;

  flipCoin() {
    const random = Math.random();
    this.res = random < 0.5 ? 'Орел' : 'Решка';

    if (this.user_choice === this.res) {
      this.res_txt = 'Вы выиграли!';
    } else {
      this.res_txt = 'Вы проиграли!';
    }
  }
}
