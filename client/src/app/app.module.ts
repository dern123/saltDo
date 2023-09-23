import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { TokenInterceptor } from './services/token.interceptor';
import { MainComponent } from './pages/main/main.component';
import { FooterLKComponent } from './components/footer-lk/footer-lk.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterLKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
