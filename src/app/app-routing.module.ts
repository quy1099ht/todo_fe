import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path : 'register' , component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
