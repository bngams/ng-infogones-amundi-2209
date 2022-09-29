import { Component, ViewChild } from '@angular/core';

type Picture = {
  url:string;
  alt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  date = new Date();
  picture: Picture = {
    url: 'https://picsum.photos/200',
    alt: 'Description'
  };
  buttonDisabled = true;
  words = [
    'hello',
    'world',
    '!'
  ];
  iconBgColor = "black"

  buttonClicked(): void {
    console.log('Button clicked!');
  }

  toggleButtonStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }

  receiveTemplateVar(myH2Title: HTMLHeadingElement): void {
    console.log()
  }
}
