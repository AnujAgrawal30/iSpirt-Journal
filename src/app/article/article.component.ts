import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private api: ApiService) { }

  article: Article | undefined;

  ngOnInit(): void {
    var article_index = window.location.href.split('/')[4];
    this.api.get_article(parseInt(article_index))
    .subscribe (
      response => {this.article = response; console.log(this.article)},
      error => {console.log(error);}
    )
  }

}
