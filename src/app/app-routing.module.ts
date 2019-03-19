import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonationDetailComponent } from './home/component/donation-detail.component';

const routes: Routes = [
  { path: 'home', component: DonationDetailComponent },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
