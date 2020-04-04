import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { Role } from './role.model';
import { LoginComponent } from './login/login/login.component';


const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  { 
      path: 'admin', 
      component: AdminComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Role.Admin] } 
  },
  { 
      path: 'login', 
      component: LoginComponent 
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
