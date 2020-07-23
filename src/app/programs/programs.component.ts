import { Component, OnInit } from '@angular/core';
import { PROGRAMS } from '../data/programs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs = PROGRAMS;
  constructor(private titleService: Title) {
    titleService.setTitle('NMU | Available Programs');
  }

  ngOnInit(): void {
  }

}
