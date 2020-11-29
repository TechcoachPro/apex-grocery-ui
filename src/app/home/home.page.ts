import { Component, ViewChild, ElementRef } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('header') header: ElementRef;
  isScrolled = false;

  slideOpts = {
    slidesPerView: 2,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    speed: 400
  };

  slideOptsCat = {
    slidesPerView: 4,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    speed: 400
  };

  slides = [
    {
      id: '1',
      title: 'Rs. 500 Cashback',
      desc: 'One treat order now',
      img: '../../assets/offers/Cashback-PNG-Free-Image.png',
      color: 'primary'
    },
    {
      id: '1',
      title: 'Minimum 30% Off!',
      desc: 'On all products fruits and virgin',
      img: '../../assets/offers/Healthy-Food-PNG-Picture.png',
      color: 'secondary'
    },
    {
      id: '1',
      title: 'Fast Delivery',
      desc: 'To all enlisted locations',
      img: '../../assets/offers/Land-Rover-Range-Rover-PNG-Picture.png',
      color: 'tertiary'
    }
  ];

  categories = [
    {
      id: '1',
      title: 'Burger',
      img: '../../assets/categories/Tofu-Burger-Transparent.png',
    },
    {
      id: '1',
      title: 'Pancake',
      img: '../../assets/categories/Pancake-PNG-HD-Image.png',
    },
    {
      id: '1',
      title: 'Noodles',
      img: '../../assets/categories/Chinese-Noodles-PNG-Image.png',
    },
    {
      id: '1',
      title: 'Hamburger',
      img: '../../assets/categories/Sandwich-Hamburger-PNG.png',
    },
    {
      id: '1',
      title: 'Fries',
      img: '../../assets/categories/Fried-Chicken-PNG-Image.png',
    },
  ];

  products = [
    {
      id: '1',
      title: 'Stew Paste',
      img: '../../assets/products/stew.jpg',
    },
    {
      id: '1',
      title: 'Fruit Castle',
      img: '../../assets/products/food-fruit-castle-sweets.jpg',
    },
    {
      id: '1',
      title: 'French Burger',
      img: '../../assets/products/resdefault.jpg',
    },
    {
      id: '1',
      title: 'Pasteries',
      img: '../../assets/products/med-food-hero.jpg',
    },
    {
      id: '1',
      title: 'Harmburger',
      img: '../../assets/products/fast-food-wallpaper-42089-43080-hd-wallpapers.jpg',
    },
  ];

  constructor() {}

  async handleScroll(event: CustomEvent<ScrollDetail>) {
    if (event && event.detail && event.detail.scrollTop) {
      const scrollTop = event.detail.scrollTop;
      this.isScrolled = scrollTop >= 50;
    }
  }
}
