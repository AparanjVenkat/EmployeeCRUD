import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: any = [];

  constructor() { }

  ngOnInit() {
    this.employees = this.getItem('employees');
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, data){
    localStorage.setItem(key,JSON.stringify(data));
  }

  deleteEmployee(id){
    this.employees.forEach((data, index) => {
      if(data.id == id){
        this.employees.splice(index, 1)
      }
    });
    this.setItem('employees',this.employees);
  }
}
