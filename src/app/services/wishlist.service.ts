import { Injectable } from '@angular/core';
import { Antiquie } from '../models/antiquie';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  wishlist: Antiquie[] = [];

  addToWishList(antiquie: Antiquie) {
    this.wishlist.push(antiquie);
  }

  removeFromWishlist(index: number) {
    this.wishlist.splice(index, 1);
  }
}
