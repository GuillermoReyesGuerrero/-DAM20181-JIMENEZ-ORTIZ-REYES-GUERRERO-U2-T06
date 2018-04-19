import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteService{
    //private http:any;
    public data:any;

    public users:any;

    constructor(private http:Http){
        //this.http=http;
    }

    getQuotes(){
        this.http.get("http://127.0.0.1:8080/sports.json").subscribe(
            res=>{
                this.data=res.json();
                this.users=this.data[0];        
                console.log(this.data);
            },
            error=>{
                console.log(error);
            }
        );
        
    }
}