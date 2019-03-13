import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatRadioModule, MatSelectModule, MatSortModule, MatTableModule
} from '@angular/material';

import { DonationDetailComponent } from '../home/component/donation-detail/donation-detail.component';
import { DonationComponent } from '../home/component/donation/donation.component';

@NgModule({
  declarations: [DonationDetailComponent, DonationComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule, MatTableModule, MatDialogModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatPaginatorModule, MatSortModule, MatRadioModule
  ],
  entryComponents: [DonationComponent]
})
export class HomeModule { }
