import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fg-level-indicator',
  templateUrl: './level-indicator.component.html',
  styleUrls: ['./level-indicator.component.scss']
})
export class LevelIndicatorComponent implements OnInit, OnChanges {

  levels: any[];

  @Input()
  maxLevel: number;

  @Input()
  level: number;

  @Output()
  levelChange = new EventEmitter<number>();

  constructor() {
    this.levels = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.levels = Array(changes.maxLevel || 0).fill(undefined);
  }

  ngOnInit(): void {

  }

}
