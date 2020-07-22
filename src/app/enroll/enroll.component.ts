import { Component, OnInit } from '@angular/core';
import { PROGRAMS } from '../data/programs';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  programs: string[] = PROGRAMS;
  constructor() { }

  ngOnInit(): void {
  }

}
