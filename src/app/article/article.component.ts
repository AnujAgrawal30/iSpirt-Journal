import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Article } from '../models';
import * as $ from 'jquery';
import { Router } from '@angular/router';

// @Pipe({ name: 'safeHtml'})
// export class SafeHtmlPipe implements PipeTransform  {
//   constructor(private sanitized: DomSanitizer) {}
//   transform(value: string) {
//     return this.sanitized.bypassSecurityTrustHtml(value);
//   }
// }

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  // providers: [
  //   {
  //     provide: APP_BASE_HREF,
  //   useValue: window.location.href
  //   }
  // ]
})
export class ArticleComponent implements OnInit {

  constructor(private api: ApiService, private sanitized: DomSanitizer, private router: Router) { }

  article: Article | undefined;
  content: any;

  go_home(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    var article_index = window.location.href.split('/')[4];
    console.log(article_index)
    console.log(window.location.href);
    this.api.get_article(article_index)
    .subscribe (
      response => {
        this.article = response;
        console.log(this.article);
        var newStr = this.article.content_html.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi, function () {
    return '<a target="blank" style="color:unset" href="' + arguments[2] + '">' + (arguments[7] || arguments[2]) + '</a>'
});
        this.content = this.sanitized.bypassSecurityTrustHtml(newStr);



        // this.article.content_html
        // var link = window.localStorage.href;
        if (window.location.href.indexOf('#') != -1){
          window.location.href = window.location.href.split('#')[0];
        }
        setTimeout(() => {
          var elements: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a');
          console.log(elements.length);
          for (let i = 0; i < elements.length; i++){
            if (elements[i].href.indexOf('#') != -1){
              elements[i].href = window.location.href + "#" + elements[i].href.split('#').pop();
            }
            
          }
        }, 1000);



      // $("a[href^='\#']").each(function(){
      //   (this as HTMLLinkElement).href=location.href.split("#")[0]+'#'+(this as HTMLLinkElement).href.substr((this as HTMLLinkElement).href.indexOf('#')+1);
      //   console.log(this.innerHTML);
      // });
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

    // $().ready(function() {
    // });
  }

}
