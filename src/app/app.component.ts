import { Component } from '@angular/core';
import {Expense} from "./Budget List/budget-list/expense";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'OwnProject';
  newExpense: Expense = null;


  onExpenseAdded(expense: Expense): void{
    this.newExpense = expense;
  }




}
