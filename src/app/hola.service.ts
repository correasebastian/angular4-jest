import { Injectable } from '@angular/core';

@Injectable()
export class HolaService {
  title = 'initial';
  constructor() { }

  sety() {
    setTimeout(() => {
      this.title = 'hello';
    }, 20);
  }

}
