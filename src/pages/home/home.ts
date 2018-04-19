import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from './../welcome/welcome';
import { QuoteService } from "../../services/quote";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  user:any;
  email:'';
  mensaje:string='';

  constructor(public navCtrl: NavController,public quotes:QuoteService) {
    this.quotes.getQuotes();
  }

  Ingresar(){
    this.data=this.quotes.data;
    this.data.forEach(element => {
      if(element.email==this.email){
        this.quotes.users=element;
        this.navCtrl.push(Welcome);
        this.mensaje=" ";      
      }
      this.mensaje="Correo invalido";
    });
    
  }

}
