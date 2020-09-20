import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Expense} from "./expense";
import {element} from "protractor";
import index from "@angular/cli";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input()
  @Output() update1 = new EventEmitter<Expense>();
  expenses: Expense[] = [
    new Expense('Czynsz', 550, new Date(2020, 9, 10)),
    new Expense('Rata', 400, new Date(2020, 9, 12)),
    new Expense('Jedzenie', 200, new Date(2020, 9, 20)),
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  deleteByIndex(i): void {
    this.expenses = this.expenses.filter((element, index) => index != i);
  }

  deleteByName(name: string): void {
    this.expenses = this.expenses.filter(element => element.name !== name);
  }

  update(exp: Expense): void {
    this.update1.emit(exp);
  }

  addTo(exp: Expense): void {
    this.expenses.push(exp)
  }

}
