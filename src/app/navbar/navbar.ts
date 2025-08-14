import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
//   protected readonly title = signal('app1');
  scrollP: boolean = false;

  @HostListener('window:scroll') onScroll() {
    if (scrollY > 0) {
      this.scrollP = true;
    } else {
      this.scrollP = false;
    }
  }
}
