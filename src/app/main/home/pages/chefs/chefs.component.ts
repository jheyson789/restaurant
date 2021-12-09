import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  private slideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);

    setInterval(() => {
      this.showSlides(this.slideIndex);
    }, 14000);
  }


showSlides(n:number) {
  const slides = document.getElementsByClassName("item-slide");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('d-block')
  }
  slides[this.slideIndex-1].classList.add('d-block')
  this.slideIndex += 1
}

}
