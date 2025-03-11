import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { APIResponseModel, CartClass, CategoryModel, IProduct } from '../../core/model/Model';
import { LazyImageDirective } from '../../shared/directive/lazy-image.directive';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, LazyImageDirective,CommonModule,AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

productList: IProduct [] = [];
categoryList$: Observable<APIResponseModel> | undefined;

productService = inject(ProductService);

cartObj: CartClass = new CartClass();

loggedUserId: number = 0;

ngOnInit(): void {

  this.getAllProduct();
  const loggedUser = localStorage.getItem('ecomUser');

  if(loggedUser != null) {
    const parseData = JSON.parse(loggedUser);
    this.loggedUserId = parseData.custId;

  }

  this.categoryList$ =  this.productService.getAllcategory();
}

getProductByCategory(cateId: number) {
  this.productService.getAllProductsByCategoryId(cateId).subscribe((res:APIResponseModel)=>{
    this.productList = res.data;
  })
}
addToCart(productImageUrl: string) {
  const product = this.productList.find(item => item.productImageUrl === productImageUrl);
  if (product) {
    product.quantity = (product.quantity || 0) + 1; // Increment quantity
  }
}


getAllProduct() {
  debugger;
  this.productService.getAllProduct().subscribe((res: APIResponseModel)=>{
    debugger;
    this.productList =  res.data;
  },error=> {
    debugger;
    alert("Error From API")
  })
}


}
