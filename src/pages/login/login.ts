import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { UserModel } from '../../models/user-model';

import { HomePage } from '../home/home';
import { MytabsPage } from  '../mytabs/mytabs';
import { CrearPage } from '../crear/crear';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    userModel: UserModel;

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public authService: AuthService) {
        this.userModel = new UserModel();
    }

    Login() {
        let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();

        this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.setRoot(CrearPage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
    }

    alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
}