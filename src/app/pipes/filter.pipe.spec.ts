import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filtered a given array based on the price passed', () => {
    const products = [{id:1,name:"bread",price:3.99}, {id:2,name:'peanut butter',price:4.99}, {id:3,name:'milk',price:7.99}];
    const pipe = new FilterPipe();
    expect(products.length).toBe(3);
    const transformedProducts1 = pipe.transform(products, '', 4)
    expect(transformedProducts1.length).toBe(1);

    const transformedProducts2 = pipe.transform(products, '', 5)
    expect(transformedProducts2.length).toBe(2);

    const transformedProducts3 = pipe.transform(products, '', 2)
    expect(transformedProducts3.length).toBe(0);

    const transformedProducts4 = pipe.transform(products, '', 8)
    expect(transformedProducts4.length).toBe(3);
  });


  it('should filtered a given array based on the character(s) passed', () => {
    const products = [{id:1,name:"bread",price:3.99}, {id:2,name:'peanut butter',price:4.99}, {id:3,name:'milk',price:7.99}];
    const pipe = new FilterPipe();
    expect(products.length).toBe(3);
    const transformedProducts1 = pipe.transform(products, 'm', undefined)
    expect(transformedProducts1.length).toBe(1);

    const transformedProducts2 = pipe.transform(products, 'b', undefined)
    expect(transformedProducts2.length).toBe(2);

    const transformedProducts3 = pipe.transform(products, 'br', undefined)
    expect(transformedProducts3.length).toBe(1);

    const transformedProducts4 = pipe.transform(products, 'ca', undefined)
    expect(transformedProducts4.length).toBe(0);
  });


  it('should filtered a given array based on the price and character(s) passed', () => {
    const products = [{id:1,name:"bread",price:3.99}, {id:2,name:'peanut butter',price:4.99}, {id:3,name:'milk',price:7.99}];
    const pipe = new FilterPipe();
    expect(products.length).toBe(3);
    const transformedProducts1 = pipe.transform(products, 'm', 4)
    expect(transformedProducts1.length).toBe(0);

    const transformedProducts4 = pipe.transform(products, 'm', 8)
    expect(transformedProducts4.length).toBe(1);

    const transformedProducts2 = pipe.transform(products, 'b', 5)
    expect(transformedProducts2.length).toBe(2);

    const transformedProducts3 = pipe.transform(products, 'b', 4)
    expect(transformedProducts3.length).toBe(1);

  });

});
