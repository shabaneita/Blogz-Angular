import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeTrigger } from '../_animations/fade';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  animations: [
    fadeTrigger
  ]
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs: Blog[] = [];
  blogsC: number[] = [1, 2, 3];

}
