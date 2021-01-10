import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ArticleComponent } from './article/article.component';
import { JournalComponent } from './journal/journal.component';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ArticleComponent,
    JournalComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
