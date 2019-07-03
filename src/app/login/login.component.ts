import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Input() title1;
@Output() childData=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  child(){
    this.childData.emit("sent data to parent");
  }
}
