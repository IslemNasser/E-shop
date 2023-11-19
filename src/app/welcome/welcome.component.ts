import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

url="https://img.freepik.com/free-photo/top-view-makeup-products-aligned-table_23-2148301785.jpg";
  users:any[]=[];
 
  constructor() { }

  ngOnInit(): void {
  }
  changeImage(event:any){
    this.url=event.target.src;
   
  }
}
