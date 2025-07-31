import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
 
   adminPhone: string = '+919728985840';
  prefilledText: string = encodeURIComponent('Hi, I would like to schedule a meeting.');
  constructor() { }

  ngAfterViewInit(): void {
    
  }
  issidebar=false
  openSideBar(){
    this.issidebar=true
  }
  closeSidebar(){
this.issidebar=false
  }
}
