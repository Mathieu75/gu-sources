import { Injectable } from '@angular/core';

@Injectable()
export class FormStatesService {

  private states: { [key: string]: any } = {};


  constructor() { }

  set(key, state) {
    this.states[key] = state;
  }

  update(key, state) {
    Object.assign(this.states[key], state);
  }

  delete(key) {
    this.states[key] = null;
  }

  get(key) {
    return this.states[key] || {};
  }

}
