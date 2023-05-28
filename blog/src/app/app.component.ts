import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  // getName(name:number){
  //   alert(name)
  // }
  // getName(name:any){
  //   alert(name)
  // }
  getName(name:string | number){
    alert(name)
  }
}
