import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const config = {
  apiKey: 'AIzaSyDr2rQIiju7Oo-6qrlx1cVxsf8tZvR8nME',
  authDomain: 'apartment-audit-7ed6d.firebaseapp.com',
  databaseURL: 'https://apartment-audit-7ed6d.firebaseio.com',
  projectId: 'apartment-audit-7ed6d',
  storageBucket: 'apartment-audit-7ed6d.appspot.com',
  messagingSenderId: '577051836836',
  appId: '1:577051836836:web:a44c885b800ea5ef144131',
  measurementId: 'G-D9T867N452'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
