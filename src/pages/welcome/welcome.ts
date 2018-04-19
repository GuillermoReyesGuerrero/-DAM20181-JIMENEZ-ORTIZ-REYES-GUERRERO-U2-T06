import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sports } from './../sports/sports';
import { QuoteService } from "../../services/quote";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class Welcome {
  public user:any;

  constructor(public navCtrl: NavController,public quotes:QuoteService) {
    this.quotes.getQuotes();

    this.user=this.quotes.users;
    this.quotes=this.user.sports;
  }

  Versports():void{
    this.navCtrl.push(Sports);
}

}