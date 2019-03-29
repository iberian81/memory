import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.page.html',
  styleUrls: ['./tp.page.scss'],
})
export class TpPage implements OnInit {

private cards = ["images/cards/0.png", "images/cards/1.png", "images/cards/2.png",
 "images/cards/0.png", "images/cards/1.png", "images/cards/2.png"];

 private visible:boolean = true;
private misteryCard:any;

 change(){
   this.visible = ! this.visible;
 }

 guessCard(card){
   this.misteryCard = this.cards[1];
   if(card==this.misteryCard){
     console.log("gagné");
   }else {
     console.log("try again");
   }
 }



  constructor() { }

  ngOnInit() {
  }

}
