import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  let http: HttpClient;
  let service: ProductService;
  let router: Router


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new ProductService(http)
    component = new AddProductComponent(service, router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
