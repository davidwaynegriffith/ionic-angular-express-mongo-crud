import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBeanPageRoutingModule } from './edit-bean-routing.module';

import { EditBeanPage } from './edit-bean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBeanPageRoutingModule
  ],
  declarations: [EditBeanPage]
})
export class EditBeanPageModule {}
