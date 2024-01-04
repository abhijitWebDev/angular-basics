import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- added this
})
export class AppComponent {
  name = 'abhijit mone';
  imageUrl = 'https://picsum.photos/id/1/200/300';
  images = [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/300/200/300',
    'https://picsum.photos/id/237/200/300',
  ]
  currentDate = new Date();
  cost= 2000;
  temprature= 25.3;
  pizza = {
    toppings: ['cheese', 'mushroom', 'onion'],
    size: 'medium'

  }
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  };

  changeImage(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}