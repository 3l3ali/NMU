import { Component, OnInit } from '@angular/core';
import { PROGRAMS } from '../data/programs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  programs: string[] = PROGRAMS;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Enroll Today | NMU The Best Uni In The Galaxy');
  }

  ngOnInit(): void {
  }

}
