import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number;

  @Input()
  inStock: number;

  @Input()
  outOfStock: number;

  selected: string = 'all';

  @Output()
  filterChanged: EventEmitter<string> = new EventEmitter<string>();

  filterChange() {
    this.filterChanged.emit(this.selected);
  }
}
