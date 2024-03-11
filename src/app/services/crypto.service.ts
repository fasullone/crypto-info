import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetResponse, DataResponse } from '../contracts/asset-response';

@Injectable({
  providedIn: 'root',
})

export class CryptoService {

  constructor(public http: HttpClient) { }

  getAllAssets(): Observable<DataResponse> {
    const url = "https://api.coincap.io/v2/assets";
    const response = this.http.get<DataResponse>(url);
    return response;
  }


}
