import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: string = '';
  product!: Product;
  message: string = "Sure you want to update product with Id: "
  alert: boolean = false;


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id'])
    this.productService.getProduct(this.id).subscribe(res => this.product = res)
  }

  updateProduct(product: Product) {
    product.id = +this.id
    this.productService.updateProduct(product).subscribe(res => console.log(res));
    this.alert = true;
  }

  openSnackBar(message: string, action: any) {
    this.snackBar.open(message, action)
  }


  openDialog(updatedProduct: Product) {
    let dialogRef = this.dialog.open(DialogComponent, {data: {action: 'Update', body: `${this.message} ${this.id}`, updatedProduct: updatedProduct}})
      dialogRef.beforeClosed().subscribe(result => {
        if (result === "delete") {
         this.updateProduct(updatedProduct);
        }
      })
  }

  closeAlert() {
    this.alert = false
    this.router.navigate(['/'])
  }






  }




