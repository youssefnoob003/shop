import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  hide: boolean = true;
  search: string = '';
  onClick() {
    this.hide = !this.hide;
  }
}
