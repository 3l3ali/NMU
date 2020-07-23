import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('NMU | Request a Tour');
  }

  ngOnInit(): void {
  }

}
