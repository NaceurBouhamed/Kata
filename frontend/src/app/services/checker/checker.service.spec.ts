import { TestBed } from '@angular/core/testing';

import { CheckerService } from './checker.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CheckerService', () => {
  let service: CheckerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CheckerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve some data', () => {
    const mockData = 9;

    service.checkNumber(mockData).subscribe(data => {
      console.log(data);
      expect(data).toEqual(mockData.toString());
    });

    const req = httpMock.expectOne(`${service.BASE_URL}${mockData}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  })
});
