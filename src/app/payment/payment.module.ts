import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { PaymentComponent } from './component/payment.component';

const routes: Routes = [{
  path: '', component: PaymentComponent
}];
@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
