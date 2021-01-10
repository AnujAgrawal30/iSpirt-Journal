import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'journal';
  background = "linear-gradient(to left bottom, hsl(109, 100%, 85%) 0%,hsl(233, 100%, 85%) 100%)"

  constructor(private router: Router){}
  
  ngOnInit(): void {
    var var1 = Math.floor(255 * Math.random());
  }

  navigate(path: string){
    this.router.navigate([path]);
  }
}
