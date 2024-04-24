import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  Mylogin: string = "My Login";
  //console.log("Alo"+Mylogin);
  
  ngOnInit(): void {
    
  }
}
