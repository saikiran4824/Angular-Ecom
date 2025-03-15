import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { IProduct } from '../../core/model/Model';
import { LazyImageDirective } from '../../shared/directive/lazy-image.directive';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, LazyImageDirective, CommonModule, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  categoryList$: Observable<string[]> | undefined;
  productService = inject(ProductService);

  ngOnInit(): void {
    this.getAllProduct();
    
  }


  getAllProduct() {
    this.productService.getAllProduct().subscribe((res: IProduct[]) => {
      this.productList = res;
    }, () => {
      alert("Error From API");
    });
  }
}
