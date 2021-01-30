import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade } from '../_animations/fade';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  animations: [
    fade('fade2', 1000)
  ]
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs: Blog[] = [];
  blogsC: number[] = [1, 2, 3];

}
