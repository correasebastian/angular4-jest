import { fakeAsync, tick } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';

import { HolaService } from './hola.service';

describe('HolaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolaService]
    });
  });

  let holaService: HolaService;
  beforeEach(inject([HolaService], (service: HolaService) => {
    holaService = service;
  }));

  test('should be created', () => {
    expect(holaService).toBeTruthy();
  });



  test('sety fakeAsync', fakeAsync(() => {
    holaService.sety();
    tick(30);
    expect(holaService.title).toBe('hello');
  }));

  test.only('sety using done', (done) => {
    holaService.sety();
    setTimeout(() => {
      expect(holaService.title).toBe('helloxxxxx');
      console.log('inner done settimeout');
      done();
    }, 30);
  });
});
