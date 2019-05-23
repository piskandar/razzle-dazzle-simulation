import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBoardComponent } from './number-board.component';

describe('NumberBoardComponent', () => {
  let component: NumberBoardComponent;
  let fixture: ComponentFixture<NumberBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
