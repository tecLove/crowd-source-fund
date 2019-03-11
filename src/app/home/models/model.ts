export interface BusStop {
    stopId: number;
    lat: number;
    lang: number;
    donationsRaisedInDollars: number;
    name: string;
    donorDetails: Donor[];
  }

export interface Donor {
      stopName: string;
      firstName: string;
      lastName: string;
      email: string;
      amountDonated: number;
  }