import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBeanPageRoutingModule } from './add-bean-routing.module';

import { AddBeanPage } from './add-bean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBeanPageRoutingModule
  ],
  declarations: [AddBeanPage]
})
export class AddBeanPageModule {}
