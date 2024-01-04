import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  // Learning all the hooks in Angular 2+
  constructor() {
    console.log('PostComponent constructor called', this.postImg);
    
  }
  ngOnInit() {
    console.log('PostComponent initialized', this.postImg);
  }
  ngOnChanges() {
    console.log('PostComponent changed', this.postImg);
  }
  ngDoCheck() {
    console.log('PostComponent checked');
  }
  ngAfterContentInit() {
    console.log('PostComponent content initialized');
  }
  ngAfterContentChecked() {
    console.log('PostComponent content checked');
  }
  ngAfterViewInit() {
    console.log('PostComponent view initialized');
  }
  ngAfterViewChecked() {
    console.log('PostComponent view checked');
  }
  ngOnDestroy() {
    console.log('PostComponent destroyed');
  }
  @Input('img') postImg = '';
  @Output() imageSelected = new EventEmitter<string>();
}
