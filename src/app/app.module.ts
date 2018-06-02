import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }   from './app.component';
import { EnterComponent } from './components/enter/enter.component';

import { AuthService } from './services/auth/auth.service';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EnterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }, 
    RequestService, */
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }