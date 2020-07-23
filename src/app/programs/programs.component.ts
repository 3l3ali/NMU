import { Component, OnInit } from '@angular/core';
import { PROGRAMS } from '../data/programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs = PROGRAMS;
  constructor() { }

  ngOnInit(): void {
  }

}
