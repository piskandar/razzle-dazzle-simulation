import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-scoring-board',
  templateUrl: './scoring-board.component.html',
  styleUrls: ['./scoring-board.component.scss']
})
export class ScoringBoardComponent implements OnInit, OnChanges {

  @Input() sum = 0;

  scoringBoard = [
    [{num: 29, points: 0, selected: false},
      {num: 42, points: 100, selected: false, hidden: true},
      {num: 38, points: 0, selected: false, hidden: true},
      {num: 15, points: 15, selected: false, hidden: true},
      {num: 19, points: 0, selected: false, hidden: true},
      {num: 41, points: 15, selected: false, hidden: true},
      {num: 37, points: 0, selected: false, hidden: true},
      {num: 29, points: 0, selected: false}],
    [{num: 18, points: 0, selected: false},
      {num: 42, points: 100, selected: false},
      {num: 38, points: 0, selected: false},
      {num: 15, points: 15, selected: false},
      {num: 19, points: 0, selected: false},
      {num: 41, points: 15, selected: false},
      {num: 37, points: 0, selected: false},
      {num: 14, points: 20, selected: false}],
    [{num: 9, points: 100, selected: false},
      {num: 28, points: -1, selected: false},
      {num: 48, points: 100, selected: false},
      {num: 26, points: -1, selected: false},
      {num: 8, points: 100, selected: false},
      {num: 30, points: -1, selected: false},
      {num: 47, points: 100, selected: false},
      {num: 27, points: -1, selected: false}],
    [{num: 32, points: -1, selected: false},
      {num: 44, points: 50, selected: false},
      {num: 25, points: -1, selected: false},
      {num: 13, points: 50, selected: false},
      {num: 31, points: -1, selected: false},
      {num: 43, points: 50, selected: false},
      {num: 24, points: -1, selected: false},
      {num: 12, points: 50, selected: false}],
    [{num: 46, points: 50, selected: false},
      {num: 34, points: -1, selected: false},
      {num: 11, points: 30, selected: false},
      {num: 23, points: -1, selected: false},
      {num: 45, points: 30, selected: false},
      {num: 33, points: -1, selected: false},
      {num: 10, points: 50, selected: false},
      {num: 22, points: -1, selected: false}],
    [{num: 36, points: 0, selected: false},
      {num: 16, points: 10, selected: false},
      {num: 21, points: 0, selected: false},
      {num: 40, points: 5, selected: false},
      {num: 35, points: 0, selected: false},
      {num: 17, points: 5, selected: false},
      {num: 20, points: 0, selected: false},
      {num: 39, points: 5, selected: false}]
  ];


  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  getClass(item) {
    let returnClass = 'points';

    if (item.hidden && item.hidden === true) {
      return 'hidden';
    }
    if (item.points === -1) {
      returnClass = 'black';
    }

    if (item.points === 0) {
      returnClass = 'prize';
    }

    if (this.sum === item.num) {
      returnClass = returnClass + ' selected';
    }


    return returnClass + this.heatLevel(item.num);
  }

  heatLevel(num) {
    let total = this.gameService.distribution.get(num);
    let percent = (total / this.gameService.gameNumber * 100) % 15;

    console.log('percent');
    let trunc = Math.trunc(percent);
    console.log(trunc);


    return ' level-' + trunc;
  }


  getText(item: { num: number; selected: boolean; points: number }) {

    if (item.num === 29) {
      return 'Cost X2';
    }

    if (item.points > 0) {
      return item.points + ' PTS';
    }

    if (item.points === 0) {
      return 'Prize';
    }


    return '';
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
    }
  }

}
