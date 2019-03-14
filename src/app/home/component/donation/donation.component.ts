import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormErrorStateMatcher } from '../../../service/form-error-state-matcher.service';
import { FundService } from '../../../service/fund.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  donationForm: FormGroup;
  matcher: ErrorStateMatcher;
  errorOccurred = false;
  success = false;
  stopId: any;
  stopName: string;
  subscription: any;
  personalDetails = [
    {
      formControlName: 'firstname',
      placeholder: 'First Name' ,
      type: 'text',
      pattern: '^[A-Z]+[a-zA-Z]*$',
      validation: {
        required: 'First Name is required',
        pattern:
          'Please enter a valid First Name - first letter starts with uppercase'
      }
    },
    {
      formControlName: 'lastname',
      placeholder: 'Last Name',
      type: 'text',
      pattern: '^[A-Z]+[a-zA-Z]*$',
      validation: {
        required: 'Last Name is required',
        pattern:
          'Please enter a valid Last Name - first letter starts with uppercase'
      }
    },
    {
      formControlName: 'email',
      placeholder: 'Email',
      type: 'email',
      validation: {
        email: 'Please enter a valid Email'
      }
    },
    {
      formControlName: 'amountDonated',
      placeholder: 'Donation Amount',
      type: 'number',
      pattern: '[0-9]*',
      validation: {
        required: 'Donation Amount is required',
        pattern: 'Please enter a valid Amount'
      }
    }
  ];
  paymentDetails = [
    {
      formControlName: 'nameonCard',
      placeholder: 'Name on Card',
      type: 'text',
      pattern: '^[a-zA-Z0-9 ]+$',
      validation: {
        required: 'Name is required',
        pattern: 'Please enter Name'
      }
    },
    {
      formControlName: 'creditCardNumber',
      placeholder: 'Card Number',
      type: 'number',
      // tslint:disable-next-line:max-line-length
      pattern:
        '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$',
      validation: {
        required: 'Credit card number is required',
        pattern: 'Please enter a valid Credit card number'
      }
    },
    {
      formControlName: 'expdate',
      placeholder: 'Expiry Date(MMYYYY)',
      type: 'number',
      pattern: '^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$',
      validation: {
        required: 'Expiry Date is required',
        pattern: 'Please enter a valid Expiry Date'
      }
    },
    {
      formControlName: 'cvv',
      placeholder: 'CVV(xxx-x)',
      type: 'number',
      pattern: '^[0-9]{3,4}$',
      validation: {
        required: 'CVV is required',
        pattern: 'Please enter a valid CVV'
      }
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private errorMatcher: FormErrorStateMatcher,
    private service: FundService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matcher = this.errorMatcher;
  }

  ngOnInit() {
    this.donationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.email])],
      amountDonated: ['', Validators.required],
      nameonCard: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      expdate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
    this.stopId = this.route.snapshot.paramMap.get('stopId');
    this.stopName = decodeURI(this.route.snapshot.paramMap.get('stopName'));
  }
  get form(): any {
    return this.donationForm.controls;
  }

  /**
   * to handle the submission of the form
   */
  onSubmit(): void {
    // check if form is valid
    if (this.donationForm.invalid) {
      return;
    }
    // to check if exp date is valid or not
    if (!this.validateExpDate(this.form.expdate.value)) {
      this.form.expdate.setErrors({ pattern: true });
      return;
    }
    const obj = {
      stopName: '',
      firstName: this.form.firstname.value,
      lastName: this.form.lastname.value,
      email: this.form.email.value,
      amountDonated: this.form.amountDonated.value
    };
    try {
      this.service.donateFund(this.stopId, this.form.amountDonated.value, obj);
      this.errorOccurred = false;
      this.success = true;
    } catch (error) {
      this.errorOccurred = true;
      this.success = false;
    }
  }
  /**
   * to validate expiry date of the card
   * @param stringtype date
   */
  validateExpDate(date: string) {
    const year = parseInt(date.substring(2, date.length), 10);
    const month = parseInt(date.substring(0, 2), 10);
    const currDate = new Date();
    if (month < currDate.getMonth() + 1 || year < currDate.getFullYear()) {
      return false;
    }
    return true;
  }
  /**
   * to navigate to donation form
   */
  exit() {
    this.router.navigate(['/home']);
  }
}
