import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Expense} from "../../Budget List/budget-list/expense";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() expense: Expense = null;
  @Output() expenseAdded = new EventEmitter<Expense>();
  @Output() expenseUpdate = new EventEmitter<Expense>();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      value: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }


  add(): void {
    if (this.form.valid)  {
      const data = this.form.value;
      const expense = new Expense(data.name, data.value, data.date);
      this.expenseAdded.emit(expense);
      this.form.reset({
        date: ''
      });
    }
  }

  update(): void{

  }


  isEdit(): boolean{
    return !!this.expense;
  }


}
