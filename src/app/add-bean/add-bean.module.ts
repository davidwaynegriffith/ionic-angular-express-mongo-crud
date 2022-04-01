import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBeanPageRoutingModule } from './add-bean-routing.module';

import { AddBeanPage } from './add-bean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBeanPageRoutingModule
  ],
  declarations: [AddBeanPage]
})
export class AddBeanPageModule {}
