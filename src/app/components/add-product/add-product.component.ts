import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert: boolean = false;

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    this.prodService.createProduct(product).subscribe(res => console.log(res))
    this.alert = true
  }

  closeAlert() {
    this.alert = false
    this.router.navigate(['/'])
  }

}
