import { Component, OnInit } from '@angular/core';
import { of, delay, from, concatMap } from 'rxjs';

@Component({
  selector: 'app-parent-test',
  templateUrl: './parent-test.component.html',
  styleUrls: ['./parent-test.component.css']
})
export class ParentTestComponent implements OnInit {
  parentData: string;

  private myArray = ["Mock get request data", "another mock returned data", "hello world", "more data"];

  constructor() { }

  ngOnInit(): void {
    this.updateData();    
  }

  updateData(): void {
    from(this.myArray).pipe(
      concatMap(item => 
        of(item).pipe(delay(1000))
      )
    ).subscribe(item => {
          console.log(item);
          this.parentData = item;
    });
  }
}
