import { Component, OnInit } from '@angular/core';
import { AntiqueService } from '../services/antique.service';
import { Antiquie } from '../models/antiquie';
import { MatSelectChange } from '@angular/material/select';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  antiquies: Antiquie[];
  antiquiesTemp: Antiquie[];

  constructor(
    private antiqueService: AntiqueService,
    public cartService: CartService,
    public wishlistService: WishlistService
  ) {
    this.antiquies = antiqueService.antiquies;
    this.antiquiesTemp = antiqueService.antiquies;
  }

  ngOnInit(): void {
  }

  onSearch(searchValue: string) {
    this.antiquies = this.antiquiesTemp.filter(a => a.title.toLowerCase().match(searchValue));
    debugger;
  }

  onFilter(matSelectChange: MatSelectChange) {
    debugger;
    switch (matSelectChange.value) {
      // rate lowest to highest
      case 1:
        this.antiquies = this.antiquiesTemp.sort((first, second) => {
          if (first.rate < second.rate) {
            return -1;
          }
          else {
            return 1;
          }
        });
        break;
      // rate hoghest to lowest
      case 2:
        this.antiquies = this.antiquiesTemp.sort((first, second) => {
          if (first.rate > second.rate) {
            return -1;
          }
          else {
            return 1;
          }
        });
        break;
      // new arrivals
      case 3:
        this.antiquies = this.antiquiesTemp.sort((first, second) => {
          if (first.id > second.id) {
            return -1;
          }
          else {
            return 1;
          }
        });
        break;
    }
  }

}
