import { Injectable } from '@angular/core';
import { Antiquie } from '../models/antiquie';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Antiquie[] = [];

  addToCart(antiquie: Antiquie) {
    this.cart.push(antiquie);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}
