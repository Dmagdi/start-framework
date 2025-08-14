import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-portfolio',
  imports: [RouterOutlet],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  isHidden: boolean = true;

  isImgs: string[] = [
    './Images/port1.png',
    './Images/port2.png',
    './Images/port3.png',
    './Images/port3.png',
    './Images/port2.png',
    './Images/port1.png',
  ];

  modelImg: string = '';

  hideModel(eleTarget: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleTarget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }

  

}
