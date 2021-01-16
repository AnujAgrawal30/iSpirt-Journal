import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [
    {
      provide: APP_BASE_HREF,
    useValue: window.location.href
    }
  ]
})
export class ArticleComponent implements OnInit {

  constructor(private api: ApiService) { }

  article: Article | undefined;

  ngOnInit(): void {
    var article_index = window.location.href.split('/')[4];
    this.api.get_article(parseInt(article_index))
    .subscribe (
      response => {
        this.article = response;
        console.log(this.article);
        // var indices: number[] = [];
        // var i = 0;
        // while (this.article.content_html.indexOf('#', i) != -1){
        //   i = this.article.content_html.indexOf('#');
        //   indices.push(i);
        // }
        // var id = this.article.id;
        // for (let i of indices) {
        //   this.article.content_html = this.article.content_html.substr(0, i) + '/articles/' + id + this.article.content_html.substr(i);
        // }
      },
      error => {console.log(error);}
    )
  }

}
