import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Response } from '../interface/response';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<Response> = (route: ActivatedRouteSnapshot, _: RouterStateSnapshot) => {

  //constructor(private userService: UserService) {}
  const userServvice = inject(UserService)
  return userServvice.getUser(route.paramMap.get('uuid')!);
};

