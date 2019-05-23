import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringBoardComponent } from './scoring-board.component';

describe('ScoringBoardComponent', () => {
  let component: ScoringBoardComponent;
  let fixture: ComponentFixture<ScoringBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
