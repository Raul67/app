import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {MytabsPage} from '../pages/mytabs/mytabs';
import { CrearPage } from '../pages/crear/crear';
import { ValidarPage } from '../pages/validar/validar';
import { EventosPage } from '../pages/eventos/eventos';

import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';

import {AngularFireDatabaseModule} from 'angularfire2/database';

export const firebaseConfig = {
  apiKey:"AIzaSyDxM_KiTb4Il55bivqYxyi4ieBu7kirdBk",
  authDomain: "learnsintown.firebaseapp.com",
  databaseURL: "https://learnsintown.firebaseio.com",
  projectId: "learnsintown",
  storageBucket: "",
  messagingSenderId: "684530885635"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MytabsPage,
    ValidarPage,
    EventosPage,
    CrearPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'learnsintown'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MytabsPage,
    ValidarPage,
    EventosPage,
    CrearPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirebaseDbProvider
  ]
})
export class AppModule {}
