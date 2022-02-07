import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kyle needs flowers';

  onLogoClicked(){
    alert("Hello World");
  }

  onKeyUp(newTitle:string){
    this.title = newTitle;
  }
}
