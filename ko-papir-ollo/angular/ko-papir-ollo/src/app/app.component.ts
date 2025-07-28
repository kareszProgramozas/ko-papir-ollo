import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choices = ['🪨', '📄', '✂️'];
  userChoice: string | null = null;
  computerChoice: string | null = null;
  result: string = '';
  winCount = 0;
  loseCount = 0;
  drawCount = 0;

  play(choice: string) {
    const computer = this.choices[Math.floor(Math.random() * 3)];
    this.userChoice = choice;
    this.computerChoice = computer;

    if (choice === computer) {
      this.result = 'Döntetlen';
      this.drawCount++;
    } else if (
      (choice === '🪨' && computer === '✂️') ||
      (choice === '📄' && computer === '🪨') ||
      (choice === '✂️' && computer === '📄')
    ) {
      this.result = 'Nyertél';
      this.winCount++;
    } else {
      this.result = 'Vesztettél';
      this.loseCount++;
    }
  }

  reset() {
    this.userChoice = null;
    this.computerChoice = null;
    this.result = '';
    this.winCount = 0;
    this.loseCount = 0;
    this.drawCount = 0;
  }
}