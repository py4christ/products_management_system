import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let service: ProductService;
  let http: HttpClient;
  let router: Router
  let dialog: MatDialog

  beforeEach(() => {
    service = new ProductService(http)
    component = new ProductsComponent(service, router, dialog)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set the products array with the response', () => {
    spyOn(service, 'getProducts').and.callFake(() => {
      return from([[{id:1,name:"bread",price:3.99}, {id:2,name:'peanut butter',price:4.99}]])
    })
    component.ngOnInit();
    expect(component.products?.length).toBeGreaterThan(0);
  });

  it('products contains same products received from product service', () => {
    spyOn(service, 'getProducts').and.callFake(() => {
      return from([[{id:1,name:"bread",price:3.99}, {id:2,name:'peanut butter',price:4.99}]])
    })
    component.ngOnInit();
    expect(component.products![0].name).toBe('bread');
    expect(component.products![1].name).toBe('peanut butter');
  });
});
