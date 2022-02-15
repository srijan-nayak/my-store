import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductService);
  });

  describe('#getProducts', () => {
    it('should return a list of multiple items', (done: DoneFn) => {
      service.getProducts().subscribe((products) => {
        expect(products.length).toBeGreaterThan(1);
        done();
      });
    });

    it('should return a list containing only products', (done: DoneFn) => {
      service.getProducts().subscribe((products) => {
        products.forEach((product) => {
          expect(typeof product.id).toBe('number');
          expect(typeof product.name).toBe('string');
          expect(typeof product.price).toBe('number');
          expect(typeof product.url).toBe('string');
          expect(typeof product.description).toBe('string');
        });
        done();
      });
    });
  });
});
