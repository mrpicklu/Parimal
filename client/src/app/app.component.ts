import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from './shared/models/pagination';
import {IProduct} from './shared/models/product';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products: IProduct[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Produts?pageSize=50').subscribe((response: IPagination) => {
    this.products = response.data;
  }, error => {
    console.log(error);
    });
  }
}
