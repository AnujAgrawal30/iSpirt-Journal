import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleName } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // base_url = "http://127.0.0.1:8000/api/"
  base_url = "https://research.ispirt.in/api/"

  constructor(private http: HttpClient) { }

  get_articles(){
    return this.http.get<ArticleName[]>(this.base_url + "journal/articles")
  }

  get_article(name: any) {
    console.log("-----");
    console.log(name);
    console.log('-----');
    return this.http.get<Article>(this.base_url + "journal/article_by_name", {params: {name: name}});
  }
}
