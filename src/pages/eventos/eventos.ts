import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

	eventosA1:any;
    eventosM1:any;
    eventosT1:any;
    eventosC1:any;
    eventosI1:any;
    eventosL1:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
public dbFirebase :FirebaseDbProvider){


this.dbFirebase.getArte1().subscribe(eventosA1 =>{
	this.eventosA1 = eventosA1;
});

this.dbFirebase.getMusica1().subscribe(eventosM1 =>{
	this.eventosM1 = eventosM1;
});

this.dbFirebase.getTecnologia1().subscribe(eventosT1 =>{
	this.eventosT1 = eventosT1;
});

this.dbFirebase.getCiencias1().subscribe(eventosC1 =>{
	this.eventosC1 = eventosC1;
});

this.dbFirebase.getIdiomas1().subscribe(eventosI1 =>{
	this.eventosI1 = eventosI1;
});

this.dbFirebase.getLetras1().subscribe(eventosL1 =>{
	this.eventosL1 = eventosL1;
});

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

borrarEvento(id,categoria){
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
              this.dbFirebase.borrarEvento(id,categoria); 
           }
        }
      ]
    });
    
    alert.present();

 }


}
