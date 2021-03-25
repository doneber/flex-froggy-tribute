import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FroggyService } from 'src/app/froggy.service';
import { PositionDirective } from '../position.directive';
import { FrogComponent } from '../frog/frog.component';
import { Level } from '../models';

@Component({
  selector: 'fg-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {

  level: Level;
  editorValue: FormControl;

  @ViewChildren(PositionDirective)
  elements: QueryList<PositionDirective>;

  constructor(private _froggyService: FroggyService) {
    this.level = _froggyService.currentLevel;
    this.editorValue = new FormControl('justify-content: space-around;', { updateOn: 'blur' });
    this.editorValue.valueChanges.subscribe(this.onStyteChange);
  }

  onStyteChange = () => {
    // Validate the positions.
    console.log(this.elements.first.getPosition());
  }

  ngAfterViewInit(): void {
  }

  showValues () {
    console.log(this.elements.map(e => e.getPosition()));
  }

  ngOnInit(): void {
  }

}
