import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";

import {Inventory} from "src/app/inventory/inventory";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getInventoryDetails(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiServerUrl}/inventorydetails`);
  }
}
