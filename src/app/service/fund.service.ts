import { Injectable } from '@angular/core';
declare let BusStopService: any;

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private service;
  constructor() {
    this.service = new BusStopService();
   }
   getAllStops(){
     return this.service.getAllStops();
   }
   donateFund(id, amount, donorDetails) {
     return this.service.addDonation(id, amount, donorDetails);
   }
}