import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/interface/response';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  response: Response

  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save Changes' | 'Edit' = 'Edit';

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('uuid')!)
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any) => {
          console.log(response)
        }
      )
    })
  }

  changeMode(mode?: 'edit' | 'locked'): void {
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if(mode === 'edit') {
      // Logic to update the user on the back end
      console.log('Updating using on the back end');
    }
  }
}
