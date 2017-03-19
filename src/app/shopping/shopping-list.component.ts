import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'sg-login',
  templateUrl: 'login.component.pug',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {   
  // private bgColor: string;

  // constructor() {
  //   this.bgColor = this.getRandomColor();
  // }

  // @HostBinding('style.background-color') style = 'blue';
  // // @HostBinding('document.body.style') style = this.bgColor;
  // // @HostBinding('style.background-color') background-color = 'blue';

  // getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++ ) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;   
  // } 
}

