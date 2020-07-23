import { Component, OnInit } from '@angular/core';
import { PROGRAMS } from '../data/programs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  programs = PROGRAMS;
  constructor(private titleService: Title) {
    this.titleService.setTitle('NMU | Enroll Today');
  }

  ngOnInit(): void {
  }

}
