import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBeanPage } from './add-bean.page';

const routes: Routes = [
  {
    path: '',
    component: AddBeanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBeanPageRoutingModule {}
