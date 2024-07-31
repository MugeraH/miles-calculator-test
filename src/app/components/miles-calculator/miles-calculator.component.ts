import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { LoyaltyDataService } from 'src/app/services/loyalty-data.service';
@Component({
  selector: 'app-miles-calculator',
  templateUrl: './miles-calculator.component.html',
  styleUrls: ['./miles-calculator.component.css'],
})
export class MilesCalculatorComponent implements OnInit {
  showResult: boolean = false;
  columns$!: Observable<number>;
  constructor(
    private loyaltyDataService: LoyaltyDataService,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {
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
