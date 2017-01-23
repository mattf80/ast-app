import { Auth1 } from './auth1.service';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, AuthComponent],
  providers: [AuthService, Auth1]
})
export class AuthModule { }
