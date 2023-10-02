import { TestBed } from '@angular/core/testing';

import { PurchaseHistoryService } from './purchasehistory.service';

describe('PurchasehistoryService', () => {
  let service: PurchaseHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
