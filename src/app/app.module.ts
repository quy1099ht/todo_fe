import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AntDModule } from './antd.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSideComponent } from './core/components/authentication/form-side/form-side.component';
import { LogoSideComponent } from './core/components/authentication/logo-side/logo-side.component';
import { AuthenticationPagesComponent } from './core/pages/authentication-pages/authentication-pages.component';

import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { LoginFeatureComponent } from './features/login/login-feature.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './features/register/register.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoadingComponent } from './core/components/utils/loading/loading.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    AppComponent,
    FormSideComponent,
    LogoSideComponent,
    AuthenticationPagesComponent,
    LoginFeatureComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AntDModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
