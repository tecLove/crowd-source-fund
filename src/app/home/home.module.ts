import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationDetailComponent } from '../home/component/donation-detail/donation-detail.component';
import { DonationComponent } from '../home/component/donation/donation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule,
  MatSortModule, MatTableModule, MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [DonationDetailComponent, DonationComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule, MatTableModule, MatDialogModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatPaginatorModule, MatSortModule, 
  ],
  entryComponents: [DonationComponent]
})
export class HomeModule { }
