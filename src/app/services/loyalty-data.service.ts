import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedemptionRouteData } from '../models/redemption-data';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class LoyaltyDataService {
  private url = 'RedemptionData/search';
  constructor(private http: HttpClient) {}

  public getRedemptionData(origin: string, destination: string) {
    return this.http.get<RedemptionRouteData>(
      `${environment.apiUrl}/${this.url}?origin=${origin}&destination=${destination}`
    );
  }
}
