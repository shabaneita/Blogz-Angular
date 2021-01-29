import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.css']
})
export class UserDetailsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: User[] = [];
  usersC: number[] = [1, 2, 3, 4]

}
