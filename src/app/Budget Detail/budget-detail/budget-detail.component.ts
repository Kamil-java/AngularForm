import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {

  expenses: string[] = [];
  option1 = "Czynsz";
  option2 = "Kwota";
  option3 = "Data";

  constructor() { }

  ngOnInit(): void {
  }

  show() : void{
    alert("liczenie dla " + this.option1 + " " + this.expenses[0]);
  }

}
