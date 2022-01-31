import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
{path: '', component: ProductsComponent},
{path: 'products', component: ProductsComponent},
{path: 'product', component: ProductComponent},
{path: 'product/:id', component: ProductComponent},
{path: 'addProduct', component: AddProductComponent},
{path: 'dialog', component: DialogComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
