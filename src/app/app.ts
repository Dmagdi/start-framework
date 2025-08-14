import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { Portfolio } from "./portfolio/portfolio";
import { Notfound } from "./notfound/notfound";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Navbar, Footer, Contact, Portfolio, Notfound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
}
