export class User {
  constructor(
    public username: string, public password: string, public email: string,
    public fullname: string, public dob: string, public followers: User[] = [],
    public following: User[] = []) { }
}

