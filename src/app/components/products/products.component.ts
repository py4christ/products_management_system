import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] | undefined;
  search: string = "";
  newsFeed: String = "";
  selectedAmount: any;
  message: string = "Sure you want to delete product with Id: "
  alert: boolean = false;

  //variables and values for pagination
  page: number = 1;

  numberOfPadding: number = 6;


  constructor(private productService: ProductService, private router: Router, private dialog: MatDialog) { }

  amounts: any  = this.productService.getAmount();

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => this.products = response )
    console.log(`${typeof(this.selectedAmount)} <=> ${this.selectedAmount}`)
  }


  deleteProduct(id: number) {
    console.log(id)
    let productId: string = id.toString();
    this.productService.deleteProduct(productId).subscribe(res => console.log(res))
    this.alert = true
  }


  openDialog(productId: number) {
    let dialogRef = this.dialog.open(DialogComponent, {data: {action: 'Delete', body: `${this.message} ${productId}`}})
      dialogRef.beforeClosed().subscribe(result => {
        if (result === "delete") {
         this.deleteProduct(productId);
        }
      })
  }

  closeAlert() {
    this.alert = false
    location.reload()
  }


}
