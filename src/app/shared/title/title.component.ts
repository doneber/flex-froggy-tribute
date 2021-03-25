import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fg-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
