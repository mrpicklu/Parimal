import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import {map, delay} from 'rxjs/operators';
import { from } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopeParams: ShopParams) {
    let params = new HttpParams();

    if (shopeParams.brandId !== 0) {
      params = params.append('brandId', shopeParams.brandId.toString());
    }
    if (shopeParams.typeId !== 0) {
      params = params.append('typeId', shopeParams.typeId.toString());
    }
    if (shopeParams.search) {
      params = params.append('search', shopeParams.search);
    }
    params = params.append('sort', shopeParams.sort.toString());
    params = params.append('pageIndex', shopeParams.pageNumber.toString());
    params = params.append('pageSize', shopeParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl + 'Produts', {observe: 'response', params})
    .pipe(

      map(response => {
        return response.body;
      })
    );

  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Produts/brands');
  }
  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'Produts/types');
  }
}
