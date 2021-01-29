import { Component, OnInit } from '@angular/core';
import { fadeTrigger } from '../_animations/fade';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    fadeTrigger
  ]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
