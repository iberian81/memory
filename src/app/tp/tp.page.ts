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

  /**
   * Génération du jeu de cartes
   **/

  private generateDeck() {
    for (let i = 0; i < this.numberOfDistinctCards; i++) {
      let imgUrl = '/assets/images/cards/' + i + ".png";
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
    }
    this.shuffleDeck();
  }

  /** 
   * Mélange des cartes
   */
  private shuffleDeck(){
    this.cardList.forEach(
      (item, index, deck) => {
        //position aléatoire dans le tableau
      let newPos = Math.floor(Math.random() * deck.length);
        //permutation 
        deck[index] = deck[newPos];
        deck[newPos] = item;
    });
  }

  private flipCard(card, index){
    //affichage de la carte
    card.img = card.name;
    card.revealed=true;
    //masquage de la carte au bout de 1 seconde
    setTimeout(
      ()=>{
        card.img = this.questionMarkUrl;
        card.revealed = false;
      },
      1000);
  }



  constructor() { 
    this.generateDeck();
    console.log(this.cardList);
  }

  ngOnInit() {
  }

}
