import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.page.html',
  styleUrls: ['./tp.page.scss'],
})
export class TpPage implements OnInit {

  private cardList: Array<{ name: string, img: string, revealed: boolean }> =
    [];

  private numberOfDistinctCards = 6;

  private questionMarkUrl = '/assets/images/question-mark.png';

  private generateDeck() {
    for (let i = 0; i < this.numberOfDistinctCards; i++) {
      let imgUrl = '/assets/images/cards/' + i + ".png";
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
    }
  }


  constructor() { 
    this.generateDeck();
  }

  ngOnInit() {
  }

}
