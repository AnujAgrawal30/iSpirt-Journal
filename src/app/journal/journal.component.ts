import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ArticleName } from '../models';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  articles: ArticleName[] = [];
  background = "";

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    // console.log(window.location.href.split('/')[4]);
    this.next();
    this.api.get_articles()
    .subscribe (
      response => {console.log(response); this.articles = response;},
      error => {console.log(error)}
    )

    var var1 = 255 * Math.random();
    var var2 = 255 * Math.random();
    this.background = "linear-gradient(to left bottom, hsl(" + var1 + ", 100%, 85%) 0%,hsl(" + var2 + ", 100%, 85%) 100%)"
  }
  navigate(path: string){
    console.log(path);
    this.router.navigate([path]);
  }

  next(){
    // document.getElementsByClassName("journal")[0].scrollIntoView({behavior: 'smooth'})
  }

}
