import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Basic NG Project';
  hideTitle: boolean = false;
  // declared array of months.
  months: any = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September", "October", "November", "December"];
  //console.log(this.months);
  myToggle(event:any) {
    this.hideTitle = !this.hideTitle;
  }
}
