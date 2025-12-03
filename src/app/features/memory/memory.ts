  import { Component } from '@angular/core';
  import { Cartes } from './cartes';
import { NgFor, NgIf, NgStyle } from '@angular/common';

  @Component({
    selector: 'app-memory',
    imports: [NgStyle, NgFor, NgIf],
    templateUrl: './memory.html',
    styleUrls: ['./memory.css'],
  })
  export class Memory {
    carte1 : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/8/86/Badeline_portrait.png/120px-Badeline_portrait.png",
      number: 1,
      hide: true,
    }
    carte1bis : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/8/86/Badeline_portrait.png/120px-Badeline_portrait.png",
      number: 2,
      hide: true,
    }
    carte2 : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/a/a9/Granny_portrait.png/120px-Granny_portrait.png",
      number: 3,
      hide: true
    }
    carte2bis : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/a/a9/Granny_portrait.png/120px-Granny_portrait.png",
      number: 4,
      hide: true
    }
    carte3 : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/e/e1/Madeline_portrait.png/120px-Madeline_portrait.png",
      number: 5,
      hide: true
    }
    carte3bis : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/e/e1/Madeline_portrait.png/120px-Madeline_portrait.png",
      number: 6,
      hide: true
    }
    carte4 : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/a/ab/Oshiro_portrait.png/120px-Oshiro_portrait.png",
      number: 7,
      hide: true
    }
    carte4bis : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/a/ab/Oshiro_portrait.png/120px-Oshiro_portrait.png",
      number: 8,
      hide: true
    }
    carte5 : Cartes = {
      image : "https://static.wikitide.net/celestewiki/thumb/6/65/Theo_portrait.png/120px-Theo_portrait.png",
      number: 9,
      hide: true
    }
    carte5bis : Cartes = {
      image : "https://static.wikitide.net/celestewiki/thumb/6/65/Theo_portrait.png/120px-Theo_portrait.png",
      number: 9,
      hide: true
    }
    carte6 : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/2/23/Ex_portrait.png/120px-Ex_portrait.png",
      number: 10,
      hide: true
    }
    carte6bis : Cartes = {
      image: "https://static.wikitide.net/celestewiki/thumb/2/23/Ex_portrait.png/120px-Ex_portrait.png",
      number: 11,
      hide: true
    }

    carteEnCours: Cartes[] = []
    win = false

    cartes = [this.carte1, this.carte1bis, this.carte2, this.carte2bis, this.carte3, this.carte3bis, this.carte4, this.carte4bis, this.carte5, this.carte5bis, this.carte6, this.carte6bis ]

    revelerCarte(carte: Cartes) {
      if (this.win) return;

      if (!carte.hide) return;
      carte.hide = false;
      this.carteEnCours.push(carte);

      if (this.carteEnCours.length === 2) {
        this.verif();
      }
    }

    verif() {
      const [carte1, carte2] = this.carteEnCours

      if (carte1.image != carte2.image) {
        setTimeout(() => {
          carte1.hide = true;
          carte2.hide = true;
        }, 1000);
      }

      this.carteEnCours = [];

      if (this.cartes.every(carte =>  carte.hide === false)) {
        this.win = true;
      }
    }

    shuffleArray<T>(array: T[]): T[] {
      let currentIndex = array.length, randomIndex: number;
    
      // Tant qu'il reste des éléments à mélanger
      while (currentIndex !== 0) {
        // Choisir un index aléatoire
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // Échanger les éléments
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }

    commencerJeu() {
      this.cartes = this.shuffleArray(this.cartes)

      this.cartes.forEach(c=> c.hide = true)

      this.win = false;
      this.carteEnCours = []
    }

    aGagne() : boolean {
      return this.win;
    }

    ngOnInit() : void {
      this.commencerJeu()
    }

  }
