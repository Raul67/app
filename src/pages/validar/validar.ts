import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-validar',
  templateUrl: 'validar.html',
})
export class ValidarPage {

	eventosA:any;
    eventosM:any;
    eventosT:any;
    eventosC:any;
    eventosI:any;
    eventosL:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
public dbFirebase :FirebaseDbProvider, public authService: AuthService, public alertCtrl: AlertController){


  this.dbFirebase.getArte().subscribe(eventosA =>{
	 this.eventosA = eventosA;
  });

  this.dbFirebase.getMusica().subscribe(eventosM =>{
	 this.eventosM = eventosM;
  });

  this.dbFirebase.getTecnologia().subscribe(eventosT =>{
	 this.eventosT = eventosT;
  });

  this.dbFirebase.getCiencias().subscribe(eventosC =>{
	 this.eventosC = eventosC;
  });

  this.dbFirebase.getIdiomas().subscribe(eventosI =>{
	 this.eventosI = eventosI;
  });

  this.dbFirebase.getLetras().subscribe(eventosL =>{
	 this.eventosL = eventosL;
  });

}

borrarEvaluacion(id,categoria){
    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este evento?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
              this.dbFirebase.borrarEvaluacion(id,categoria); 
           }
        }
      ]
    });
    
    alert.present();

 }

 guardarEvento(evento,id,categoria){
  let alert = this.alertCtrl.create({
      title: 'Confirmar aceptacion',
      message: '¿Estás seguro de que deseas aceptar este evento?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
              this.dbFirebase.guardarEvento(evento).then(res=>{
             })

              this.dbFirebase.borrarEvaluacion(id,categoria);
           }
        }
      ]
    });
    
    alert.present();

  
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidarPage');
  }


}
