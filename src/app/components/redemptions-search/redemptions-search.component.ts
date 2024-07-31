import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { RedemptionRouteData } from 'src/app/models/redemption-data';
import { LoyaltyDataService } from 'src/app/services/loyalty-data.service';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-redemptions-search',
  templateUrl: './redemptions-search.component.html',
  styleUrls: ['./redemptions-search.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.5s', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('0.5s', style({ opacity: 0, transform: 'scale(0.9)' })),
      ]),
    ]),
  ],
})
export class RedemptionsSearchComponent implements OnInit {
  carrier: string = '';
  origin: string = '';
  destination: string = '';
  result: any = {};
  destinationData: any[] = [];
  showResult: boolean = false;

  isLoading: boolean = false;
  isError: boolean = false;
  columns$!: Observable<number>;
  constructor(
    private loyaltyDataService: LoyaltyDataService,
    private breakpointObserver: BreakpointObserver
  ) {}

  getRouteData() {
    console.log('what are you waiting for');
    // if (this.origin === '' || this.destination) {
    //   this.isError = true;
    //   return;
    // }
    this.loyaltyDataService
      .getRedemptionData(this.origin, this.destination)
      .subscribe((res: RedemptionRouteData) => {
        if (res) {
          console.log('reponse', res);

          this.result = res;
          this.showResult = true;
        }
      });
  }

  ngOnInit(): void {
    this.loyaltyDataService
      .getDestinationsData()
      .subscribe((res: string[]) => (this.destinationData = res));
    console.log(this.destinationData);

    this.columns$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) => {
          if (result.matches) {
            return 1;
          }
          return 3;
        })
      );
  }
}
