import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
   let component: ProductComponent;
   let fixture: ComponentFixture<ProductComponent>;

  let service: ProductService;
  let http: HttpClient;
  let route: ActivatedRoute;
  let router: Router
  let snackBar: MatSnackBar;
  let dialog: MatDialog

  beforeEach(() => {
    service = new ProductService(http)
    component = new ProductComponent(service, route, router, snackBar, dialog)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
