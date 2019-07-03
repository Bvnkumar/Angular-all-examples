import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ColorDirective} from '../sample.directive'
import {HttpClientModule} from '@angular/common/http'
const routes:Routes=[{path:'login',component:LoginComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
