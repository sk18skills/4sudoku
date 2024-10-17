import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku-cell',
  standalone: true,
  imports: [],
  templateUrl: './sudoku-cell.component.html',
  styleUrl: './sudoku-cell.component.css'
})
export class SudokuCellComponent {
  @Input() value: number | null = null;
  possibilities: number = 15;
  flag: number = 4;
  oneBitCount: number | null = null;
  
  
  countOneBits(num: number): number {
    let count = 0;

    while (num > 0) {
        count += num & 1; // Increment count if the last bit is 1
        num >>= 1;        // Right shift the number by 1 bit
    }

    return count;
}

  onCount() {
    this.flag = this.countOneBits(this.possibilities);
}

  onInputChange() {
    let val = 2 ** value;



    if(val & possibilities == val)
    {
      flag=1;
      this.possibilities=val;
      // call for optimization

    }
    else {

    // red colour cell stop execution      error 
    }


}
  }