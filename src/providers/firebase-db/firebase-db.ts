import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }

guardarEvento(evento){
 if(!evento.id){
 evento.id  = Date.now();
 }
     return this.afDB.database.ref('Evento/'+evento.categoria+'/'+evento.id+'/').set(evento) 
     }

guardarMusica(musica){
     return this.afDB.database.ref('Evento/'+musica.categoria+'/'+musica.id+'/').set(musica) 
     }


  getArte(){
    return this.afDB.list('Evaluar/'+'Arte/').valueChanges();
  }

  getMusica(){
    return this.afDB.list('Evaluar/'+'Música/').valueChanges();
  }

  getTecnologia(){
    return this.afDB.list('Evaluar/'+'Tecnología/').valueChanges();
  }

  getCiencias(){
    return this.afDB.list('Evaluar/'+'Ciencias Exactas/').valueChanges();
  }

  getIdiomas(){
    return this.afDB.list('Evaluar/'+'Idiomas/').valueChanges();
  }

  getLetras(){
    return this.afDB.list('Evaluar/'+'Letras/').valueChanges();
  }

  getArte1(){
    return this.afDB.list('Evento/'+'Arte/').valueChanges();
  }

  getMusica1(){
    return this.afDB.list('Evento/'+'Música/').valueChanges();
  }

  getTecnologia1(){
    return this.afDB.list('Evento/'+'Tecnología/').valueChanges();
  }

  getCiencias1(){
    return this.afDB.list('Evento/'+'Ciencias Exactas/').valueChanges();
  }

  getIdiomas1(){
    return this.afDB.list('Evento/'+'Idiomas/').valueChanges();
  }

  getLetras1(){
    return this.afDB.list('Evento/'+'Letras/').valueChanges();
  }

  public borrarEvaluacion(id, categoria){
    this.afDB.database.ref('Evaluar/'+categoria+'/'+id).remove();
  }

  public borrarEvento(id, categoria){
    this.afDB.database.ref('Evento/'+categoria+'/'+id).remove();
  }

}
