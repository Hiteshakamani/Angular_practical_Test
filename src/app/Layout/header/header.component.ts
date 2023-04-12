import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchItem : any;
  constructor(private router:Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['/search', this.searchItem]);
  }
  

}
