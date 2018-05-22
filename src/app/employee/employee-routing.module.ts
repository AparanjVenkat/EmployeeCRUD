import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';


const emproutes: Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'add/:id',
    component: ManageComponent
  },
  {
    path:'edit/:id',
    component: ManageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(emproutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
