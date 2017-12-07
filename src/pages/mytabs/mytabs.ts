import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mytabs',
  templateUrl: 'mytabs.html'
})
export class MytabsPage {

  validarRoot = 'ValidarPage'
  eventosRoot = 'EventosPage'
  crearRoot = 'CrearPage'

  validarMuestra = true
  eventosMuestra = true
  crearMuestra = true

  constructor(public navCtrl: NavController) {}

}
