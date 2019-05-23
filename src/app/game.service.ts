import {Injectable} from '@angular/core';
import {NumberSpace, Point} from './model/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pointsTotal = 0;
  moneySpent = 0;
  gameNumber = 0;
  gameCost = 1;
  prizeCount = 1;
  sum = 0;
  average = 0;
  runs = 0;
  totalGameNumber = 0;

  board = [
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
    [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
    [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(2, false)],
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
    [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(2, false)],
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
    [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
    [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
    [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)]
  ];

  distribution = new Map<number, number>();

  constructor() {
    for (let i = 8; i <= 48; i++) {
      this.distribution.set(i, 0);
    }
  }

  playRound() {

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j].selected = false;
      }

    }


    this.gameNumber++;
    this.moneySpent += this.gameCost;


    let pointsPicked = 0;
    const pickedPoints = new Set();

    while (pointsPicked < 8) {

      const row = Math.floor(Math.random() * 13);
      const col = Math.floor(Math.random() * 11);

      if (pickedPoints.add(new Point(row, col))) {
        pointsPicked++;
      }

    }
    this.sum = 0;
    for (const pickedPoint of Array.from(pickedPoints.values())) {
      this.sum += this.board[pickedPoint.col][pickedPoint.row].num;
      this.board[pickedPoint.col][pickedPoint.row].selected = true;
    }
    this.pointsTotal += this.getPoints(this.sum);

    if (this.getPrizeCount(this.sum)) {
      this.prizeCount += 1;
    }
    if (this.sum === 29) {
      this.gameCost *= 2;
    }

    this.updateDistribution(this.sum);
  }

  private updateDistribution(sum) {
    let current = this.distribution.get(sum);
    current++;
    this.distribution.set(sum, current);
  }

  private getPrizeCount(sum: number): boolean {
    switch (sum) {
      case 18:
      case 38:
      case 19:
      case 37:
      case 36:
      case 21:
      case 35:
      case 20:
        return true;
    }
    return false;
  }

  private getPoints(sum: number): number {
    switch (sum) {
      case 8:
      case 9:
      case 47:
      case 48 :
        return 100;
      case 10:
      case 12:
      case 13:
      case 43:
      case 44:
      case 46 :
        return 50;
      case 11:
      case 45 :
        return 30;
      case 14:
      case 42 :
        return 20;
      case 15:
      case 41 :
        return 15;
      case 16:
        return 10;
      case 17:
      case 39:
      case 40 :
        return 5;
    }

    return 0;
  }

  reset() {
    this.pointsTotal = 0;
    this.moneySpent = 0;
    this.gameNumber = 0;
    this.gameCost = 1;
    this.prizeCount = 1;
    this.sum = 0;
    this.board = [
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
      [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
      [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(2, false)],
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
      [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(2, false)],
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
      [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)],
      [new NumberSpace(3, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(5, false)],
      [new NumberSpace(4, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(4, false), new NumberSpace(1, false), new NumberSpace(3, false), new NumberSpace(2, false), new NumberSpace(3, false), new NumberSpace(6, false), new NumberSpace(4, false), new NumberSpace(5, false), new NumberSpace(3, false), new NumberSpace(4, false)]
    ];

    this.distribution = new Map<number, number>();
    for (let i = 8; i <= 48; i++) {
      this.distribution.set(i, 0);
    }
  }

  private printStatus() {
    console.log('Game Number:' + this.gameNumber);
    console.log('Money Spent:' + this.moneySpent);
    console.log('Points:' + this.pointsTotal);
    console.log('Prize Count:' + this.prizeCount);
    console.log('Game Cost:' + this.gameCost);
    console.log('-------------------');
  }
}
