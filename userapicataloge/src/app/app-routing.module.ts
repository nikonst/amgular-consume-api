import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { userResolver } from './services/user.resolver';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'userdetails/:uuid', component: UserdetailsComponent, 
    resolve: {resolvedResponse: userResolver}},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
