import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OpenapiEditorModule} from '@rep-studio/openapi-editor';

declare var monaco: any;

@Component({
  standalone: true,
  selector: 'rep-studio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    OpenapiEditorModule
  ]
})
export class AppComponent implements OnInit {

  @ViewChild('editor') elementRef: ElementRef | undefined;

  title = 'app-studio';

  ngOnInit(): void {
    this.init();
  }


  private init() {
    const text = `function hello() {
	  alert('Hello world!');
    }`;

    monaco.editor.create(this.elementRef?.nativeElement, {
      value: text,
      language: "javascript",
      automaticLayout: true,
    });
  }
}
