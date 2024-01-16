import { Component } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {
  search: string = '';
}
