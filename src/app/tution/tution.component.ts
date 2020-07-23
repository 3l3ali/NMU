import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tution',
  templateUrl: './tution.component.html',
  styleUrls: ['./tution.component.scss']
})
export class TutionComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('NMU | Tution & Fees');
  }

  ngOnInit(): void {
  }

}
