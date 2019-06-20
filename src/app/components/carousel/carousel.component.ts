import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  ngOnInit() {
  }
  showNavigationArrows = false;
  showNavigationIndicators = false;
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['./assets/images/bg/bg1.jpg','./assets/images/bg/bg2.jpg','./assets/images/bg/bg3.jpg'];


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    
    
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;


  }

}
