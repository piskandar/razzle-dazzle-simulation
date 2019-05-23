import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  polling: any;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  start() {

      stop();
      this.gameService.reset();
      this.gameService.runs += 1;
      this.polling = interval(50).subscribe((x) => {
        for (let i = 0; i < 500; i++) {
          this.gameService.playRound();
          if (this.gameService.pointsTotal >= 100) {
            this.polling.unsubscribe();
            this.gameService.totalGameNumber += this.gameService.gameNumber;
            this.gameService.average = this.gameService.totalGameNumber / this.gameService.runs;
            break;
          }
        }
      });

  }

  stop() {

    this.polling.unsubscribe();
  }

  reset() {
    stop();
    this.gameService.reset();
  }
}
