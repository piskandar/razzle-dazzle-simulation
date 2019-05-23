import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NumberBoardComponent } from './number-board/number-board.component';
import { ScoringBoardComponent } from './scoring-board/scoring-board.component';
import { StatusBoardComponent } from './status-board/status-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NumberBoardComponent,
    ScoringBoardComponent,
    StatusBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
