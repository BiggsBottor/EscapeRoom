import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS, Testimonials, GAMES_LIST, GamesList } from  '../../data';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  testimonials: Testimonials[] = TESTIMONIALS;
  gameList: GamesList[] = GAMES_LIST;

  slideConfig = {
    slidesToShow    : 3,
    slidesToScroll  : 1,
    dots            : true,
    arrows          : false,
    infinite        : true,
    appendDots      : '#se_vi_slider_dots',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
