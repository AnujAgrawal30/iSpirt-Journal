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

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(window.location.href.split('/')[4]);
    this.api.get_articles()
    .subscribe (
      response => {console.log(response); this.articles = response;},
      error => {console.log(error)}
    )
  }
  navigate(path: string){
    console.log(path);
    this.router.navigate([path]);
  }

}
