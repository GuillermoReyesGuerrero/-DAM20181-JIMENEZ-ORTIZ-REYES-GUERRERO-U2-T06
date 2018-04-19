import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from "../../services/quote";


@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class Sports {

  public sports=[];
  color;

  constructor(public navCtrl: NavController,public quotes:QuoteService) {
    this.quotes.getQuotes();
    this.sports=this.quotes.users.sports;
  }

 //* ionViewDidEnter(){
 //*   this.sports=this.quotes.users.sports;
 //* }

}