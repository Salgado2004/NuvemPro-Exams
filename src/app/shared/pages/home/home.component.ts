import 'swiper/css';
import { Swiper } from 'swiper';
import { Component } from '@angular/core';
import { Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit() {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      modules: [Autoplay]
    });
  }
}
