import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleName } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // base_url = "http://127.0.0.1:8000/api/"
  base_url = "http://research.ispirt.in/api/"

  constructor(private http: HttpClient) { }

  get_articles(){
    return this.http.get<ArticleName[]>(this.base_url + "journal/articles")
  }

  get_article(index: number) {
    return this.http.get<Article>(this.base_url + "journal/articles/" + index);
  }
}
