import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-number-board',
  templateUrl: './number-board.component.html',
  styleUrls: ['./number-board.component.scss']
})
export class NumberBoardComponent implements OnInit {


  constructor(private gameService: GameService) {

  }

  ngOnInit() {

  }

}
