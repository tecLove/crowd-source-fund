import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonationDetailComponent } from './home/component/donation-detail/donation-detail.component';

const routes: Routes = [
  {path: 'home', component: DonationDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
