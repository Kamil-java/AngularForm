import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Expense} from "./expense";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input() newExpense: Expense = null;
  @Output() updated = new EventEmitter<Expense>();
  expenses: Expense[] = [
    // new Expense('Czynsz', 550, new Date(2020, 9, 10)),
    // new Expense('Rata', 400, new Date(2020, 9, 12)),
    // new Expense('Jedzenie', 200, new Date(2020, 9, 20)),
  ]


  constructor() {
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.newExpense) {
      this.addToExpenses(this.newExpense);
    }
  }

  delete(expense: Expense): void {
    this.expenses = this.expenses.filter(element => element.name !== expense.name);
  }

  deleteByIndex(i): void {
    this.expenses = this.expenses.filter((element, index) => index != i);
  }

  deleteByName(name: string): void {
    this.expenses = this.expenses.filter(element => element.name !== name);
  }

  update(expense: Expense): void {
    this.updated.emit(expense);
  }

  private addToExpenses(expense: Expense): void {
    this.expenses.push(expense);
  }

}
