import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './core/auth/auth-interceptor';
import {AdminModule} from './admin/admin.module';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import {PmModule} from './pm/pm.module';
import {RegisterModule} from './register/register.module';
import {UserModule} from './user/user.module';
import {ShellModule} from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    HomeModule,
    LoginModule,
    PmModule,
    RegisterModule,
    UserModule,
    ShellModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
