import { Component,OnInit} from '@angular/core';
import {SampleService} from '../sample.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample';
  data;
  constructor(private ser:SampleService,private http:HttpClient){
 
  }
  ngOnInit(){

    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data)=>{
      console.log("Data",data)
      this.data=data;
    })
  }
  parent(e){
    alert(this.ser.name)
  }
}
