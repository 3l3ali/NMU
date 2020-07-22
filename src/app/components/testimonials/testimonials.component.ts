import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS } from '../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials = TESTIMONIALS;
  constructor() { }

  ngOnInit(): void {
  }

}
