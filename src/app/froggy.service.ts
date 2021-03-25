import { Injectable } from '@angular/core';
import levels, { Level } from './game/models';

@Injectable({
  providedIn: 'root'
})
export class FroggyService {

  levels: Level[];

  constructor() {
    this.levels = levels;
  }

  get currentLevel(): Level {
    return this.levels[0];
  }
}
