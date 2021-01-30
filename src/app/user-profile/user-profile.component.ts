import { Component, OnInit } from '@angular/core';
import { fade } from '../_animations/fade';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    fade('fade1', 500),
    fade('fade2', 700),
    fade('fade3', 1000),
  ]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
