import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationBackGroundComponent } from './core/pages/authentication-pages/authentication-bg.component';
import { LoginFeatureComponent } from './features/login-feature/login-feature.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
  {
    path: 'authentication',
    component: AuthenticationBackGroundComponent,
    children: [
      {
        path: 'login',
        component: LoginFeatureComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
