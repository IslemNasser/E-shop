import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user = {
    Username:'',
    Password:'',
  }

  users :any[] = [];

  createUser(){
    this.users.push( this.user );
    this.user = {
      Username:'',
      Password:'',
    }
    console.log(this.users);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
