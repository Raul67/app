import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController,
  ViewController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
import { ValidarPage } from '../validar/validar';
import { EventosPage } from '../eventos/eventos';

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {
	
	public eventoForm: FormGroup;

categoria: string;
nombre: string;
hora: string;
fecha: string;
lugar: string;
descripcion: string;
inscripcion: string;
requisitos: string;

  constructor(public nav: NavController, public authService: AuthService,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public navCtrl: NavController,
    public alertCtrl: AlertController,private viewCtrl : ViewController,private dbFirebase :FirebaseDbProvider) {
    	this.eventoForm = formBuilder.group({
    		categoria:['',Validators.compose([Validators.required])],
    		nombre:['',Validators.compose([Validators.required])],
    		hora:['',Validators.compose([Validators.required])],
    		fecha:['',Validators.compose([Validators.required])],
    		lugar:['',Validators.compose([Validators.required])],
    		descripcion:['',Validators.compose([Validators.required])],
    		inscripcion:['',Validators.compose([Validators.required])],
    		requisitos:['',Validators.compose([Validators.required])],
    	});
    }

    guardarEvento(evento){
    	if(!this.eventoForm.valid){
    		console.log(this.eventoForm.value);
    	}

    	else{
    		let evento = {
    			categoria: this.eventoForm.value.categoria,
    			nombre: this.eventoForm.value.nombre,
    			hora: this.eventoForm.value.hora,
    			fecha: this.eventoForm.value.fecha,
    			lugar: this.eventoForm.value.lugar,
    			descripcion: this.eventoForm.value.descripcion,
    			inscripcion: this.eventoForm.value.inscripcion,
    			requisitos: this.eventoForm.value.requisitos,
    		}
    		this.dbFirebase.guardarEvento(evento).then(res=>{
        	console.log('evento guardado en firebase');

        	let alert = this.alertCtrl.create({
      title: 'Evento creado',
      message: 'El evento ha sido creado con exito',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          this.viewCtrl.dismiss(); 
          }
        }
      ]
    });
    
    alert.present();

    		})
    	}
    }

    validar(){
      this.navCtrl.push(ValidarPage);
    }

    eventos(){
      this.navCtrl.push(EventosPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  signOut(){
    this.authService.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}
