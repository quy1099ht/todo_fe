import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPagesComponent } from './core/pages/authentication-pages/authentication-pages.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { LoginFeatureComponent } from './features/login/login-feature.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '' ,component: HomePageComponent },
  {
    path: 'authentication',
    component: AuthenticationPagesComponent,
    children: [
      {
        path: 'login',
        component: LoginFeatureComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
