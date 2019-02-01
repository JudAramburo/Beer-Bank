import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sliderange',
  templateUrl: './sliderange.component.html',
  styleUrls: ['./sliderange.component.css']
})
export class SliderangeComponent {

  @Input() name: string;
  @Output() onActiveChange = new EventEmitter();
  @Output() onRangeChange = new EventEmitter();

  public filter: boolean = false;
  public disabled: string = "true";

  constructor() { }

  onSliderChange(selectedValues: number[]) {
    this.onRangeChange.emit({ name: this.name, range: selectedValues });
  }

  onFilterChange(eve: any) {
    this.filter = !this.filter;
    this.disabled = String(!this.filter);

    this.onActiveChange.emit({ name: this.name, state: this.filter });
  }

}
