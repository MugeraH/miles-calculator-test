import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedemptionRouteData } from 'src/app/models/redemption-data';
import { LoyaltyDataService } from 'src/app/services/loyalty-data.service';
@Component({
  selector: 'app-redemptions-search',
  templateUrl: './redemptions-search.component.html',
  styleUrls: ['./redemptions-search.component.css'],
})
export class RedemptionsSearchComponent implements OnInit {
  carrier: string = '';
  origin: string = '';
  destination: string = '';
  result: any = {};
  destinationData: string[] = [];
  showResult: boolean = false;

  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private loyaltyDataService: LoyaltyDataService) {}

  getRouteData() {
    if (this.origin === '' || this.destination) {
      this.isError = true;
      return;
    }
    this.loyaltyDataService
      .getRedemptionData(this.origin, this.destination)
      .subscribe((res: RedemptionRouteData) => (this.result = res));
    console.log(this.destinationData);
  }

  ngOnInit(): void {
    this.loyaltyDataService
      .getDestinationsData()
      .subscribe((res: string[]) => (this.destinationData = res));
    console.log(this.destinationData);
  }
}
