import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

// Importing Markdown
import * as marked from 'marked';
import { Renderer } from 'marked';
import { highlight } from 'highlight.js';
import * as highlightjs from 'highlight.js';
import { DOMPurifyI } from 'dompurify';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnChanges {

  @Input()
  text: string | undefined;
  data: SafeHtml | undefined;
  md: any;

  static highlightCode(code: string, language: string): string {
    if (!(language && highlightjs.getLanguage(language))) {
      // use 'markdown' as default language
      language = 'markdown';
    }

    const result = highlight(language, code).value;
    return `<code class="hljs ${language}">${result}</code>`;
  }

  constructor(private sanitizer: DomSanitizer) {
    const renderer = new Renderer();
    renderer.code = MarkdownComponent.highlightCode;
    this.md = marked.setOptions({ renderer });
  }

  markdownToSafeHtml(value: string): SafeHtml {
    const html = this.md(value);
    const safeHtml = DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === 'text') {
        const value = changes[propName].currentValue;
        if (value) {
          this.data = this.markdownToSafeHtml(value);
        }
      }
    }
  }

}
