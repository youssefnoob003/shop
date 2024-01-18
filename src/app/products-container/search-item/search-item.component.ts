import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  search: string = '';

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchChange() {
    this.searchEvent.emit(this.search);
  }

  reset() {
    if (this.search == "") this.searchEvent.emit(this.search);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchChange();
    }
  }
}
