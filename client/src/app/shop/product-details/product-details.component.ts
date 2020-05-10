import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { error } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productP: IProduct;

  constructor(private shopService: ShopService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.productP = product;
    },
       // tslint:disable-next-line: no-shadowed-variable
       error => {
      console.log(error);
    });
  }

}
