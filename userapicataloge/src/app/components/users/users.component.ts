import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response: Response;
  user: User;

  constructor (private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (result: any) => {
      console.log(result)
      this.response = result
    } )
  }
}
