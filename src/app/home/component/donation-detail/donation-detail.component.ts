import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { FundService } from '../../../service/fund.service';
import { BusStop, Donor } from '../../models/model';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.scss']
})
export class DonationDetailComponent implements OnInit, AfterViewInit {
  busStopData: BusStop[];
  selected: any;
  totalFund: any;
  dataSource: MatTableDataSource<Donor>;
  errorOccurred = false;
  displayedColumns: string[] = ['stopName', 'firstName', 'lastName', 'email', 'amountDonated'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  busStopSelectControl = new FormControl('', Validators.required);

  constructor(private service: FundService, private router: Router) { }
  /**
   * Initialization
   */
  ngOnInit() {
    this.getBusStopData();
  }
  /**
   * After view has been initialized
   */
  ngAfterViewInit() {
    this.doSortPagination();
  }
  /**
   * to get bus stop data
   */
  getBusStopData() {
    try {
      this.busStopData = this.service.getAllStops();
    } catch (error) {
      this.errorOccurred = true;
    }
    if (this.busStopData) {
      const _data = this.busStopData.map((data) => data.donorDetails);
      this.dataSource = new MatTableDataSource<Donor>(_data.flat());
    }
  }
  /**
   * to do sorting and pagination
   */
  doSortPagination = () => {
    if (this.busStopData) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }
  /**
   * to update donation detais as per the selection of the bus stop
   */
  showDonationDetails() {
    if (this.selected) {
    const obj = this.busStopData.filter((data) => data.stopId == this.selected)[0];
    this.totalFund = obj['donationsRaisedInDollars'];
    this.dataSource.filter = obj['name'].trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } else {
    this.dataSource.filter = '';
  }
}
  /**
   * to pop up donation form for a user to donate
   */
  showDonateDialog() {
    const route = '/payment/' + this.selected;
    this.router.navigate([route]);
  }
}
