import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBeanPage } from './edit-bean.page';

const routes: Routes = [
  {
    path: '',
    component: EditBeanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBeanPageRoutingModule {}
