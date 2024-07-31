import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedemptionRouteData } from '../models/redemption-data';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class LoyaltyDataService {

  constructor(private http: HttpClient) {}

  public getRedemptionData(origin: string, destination: string) {
    return this.http.get<RedemptionRouteData>(
      `${environment.apiUrl}/RedemptionData/search?origin=${origin}&destination=${destination}`
    );
  }

  public getDestinationsData() {
    return this.http.get<string[]>(`${environment.apiUrl}/DestinationData`);
  }
}
