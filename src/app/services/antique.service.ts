import { Injectable } from '@angular/core';
import { Antiquie } from '../models/antiquie';

@Injectable({
  providedIn: 'root'
})
export class AntiqueService {

  constructor() { }

  antiquies: Antiquie[] = [
    {
      id: 1,
      title: 'Chauhan Antique Wooden and Iron Cycle Home Decor Product',
      rate: '299',
      image: '../../assets/images/cycle.jpg',
      imageAlt: 'Wooden and Iron Cycle',
      content: 'Material: Paper Mache, Color: Green, Technics: Handmade Package Contents: 7' + 
                'showpiece Elephant This Paper Mache Elephant decorative item Enhance the decor ' + 
                'value of the house, office, hotel, temple etc Great ideas for wedding gifts, anniversary gifts' + 
                'house warming ceremonies, Birthday gifts, new venture, award ceremonies, Diwali and festival gifts. ' +
                'A valuable personal collectible Use: Home decoration, Theme: Animal'
    },
    {
      id: 2,
      title: 'Antique Music Decorative Canon Brass',
      rate: '296',
      image: '../../assets/images/brass.jpg',
      imageAlt: 'Antique Music Decorative Canon Brass',
      content: 'Package Content - One Unit Brass Antique Music Decorative Canon Showpiece' + 
                'Product Size (LxWxH) - 4"x4"x9.5"' + 
                'Care Instruction - Don\'t wash, use dry/wet cotton cloth to remove dirt.' + 
                'Beware of buying from other UNAUTHORIZED sellers as no other seller except' +
                '"eCraftIndia" is allowed to sell eCraftIndia Products. Buy original product from "eCraftIndia" seller only.'
    },
    {
      id: 3,
      title: 'Kartique Metal Telescope With Gift Box',
      rate: '1149',
      image: '../../assets/images/telescope.jpg',
      imageAlt: 'Kartique Metal Telescope With Gift Box',
      content: 'Package Content - One Unit Brass Antique Music Decorative Canon Showpiece' + 
                'Product Size (LxWxH) - 4"x4"x9.5"' + 
                'Care Instruction - Don\'t wash, use dry/wet cotton cloth to remove dirt.' + 
                'Beware of buying from other UNAUTHORIZED sellers as no other seller except' +
                '"eCraftIndia" is allowed to sell eCraftIndia Products. Buy original product from "eCraftIndia" seller only.'
    },
    {
      id: 4,
      title: 'Worthy Shoppee Wooden & Brass Antique Hut Shape Coaster Set Home Decor Gift Item',
      rate: '199',
      image: '../../assets/images/house.jpg',
      imageAlt: 'Worthy Shoppee Wooden & Brass Antique Hut',
      content: 'Package Content - One Unit Brass Antique Music Decorative Canon Showpiece' + 
                'Product Size (LxWxH) - 4"x4"x9.5"' + 
                'Care Instruction - Don\'t wash, use dry/wet cotton cloth to remove dirt.' + 
                'Beware of buying from other UNAUTHORIZED sellers as no other seller except' +
                '"eCraftIndia" is allowed to sell eCraftIndia Products. Buy original product from "eCraftIndia" seller only.'
    },
    {
      id: 5,
      title: 'ALCRAFT Real Leather Green Stone Brown Embossed Handmade Diary with Metal Lock',
      rate: '399',
      image: '../../assets/images/book.jpg',
      imageAlt: 'Antique Music Decorative Canon Brass',
      content: 'Package Content - One Unit Brass Antique Music Decorative Canon Showpiece' + 
                'Product Size (LxWxH) - 4"x4"x9.5"' + 
                'Care Instruction - Don\'t wash, use dry/wet cotton cloth to remove dirt.' + 
                'Beware of buying from other UNAUTHORIZED sellers as no other seller except' +
                '"eCraftIndia" is allowed to sell eCraftIndia Products. Buy original product from "eCraftIndia" seller only.'
    },
    {
      id: 6,
      title: 'Vian Wood Specs Stand',
      rate: '109',
      image: '../../assets/images/stand.jpg',
      imageAlt: 'Vian Wood Specs Stand',
      content: 'Package Content - One Unit Brass Antique Music Decorative Canon Showpiece' + 
                'Product Size (LxWxH) - 4"x4"x9.5"' + 
                'Care Instruction - Don\'t wash, use dry/wet cotton cloth to remove dirt.' + 
                'Beware of buying from other UNAUTHORIZED sellers as no other seller except' +
                '"eCraftIndia" is allowed to sell eCraftIndia Products. Buy original product from "eCraftIndia" seller only.'
    },
  ]
}
