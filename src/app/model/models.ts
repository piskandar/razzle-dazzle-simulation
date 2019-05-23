export class NumberSpace {
  num: number;
  selected: boolean;


  constructor(num: number, selected: boolean) {
    this.num = num;
    this.selected = selected;
  }
}


export class Point {
  row: number;
  col: number;


  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  public equals(obj: Point): boolean {
    return this.row === obj.row && this.col === obj.col;
  }
}
