import { Component } from '@angular/core';
import { scoreRepository } from '../../Store/score.store';
import { async } from 'rxjs';
import {NgFor, AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-tik-tak-toe',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './tik-tak-toe.html',
  styleUrl: './tik-tak-toe.css',
})
export class TikTakToe {
  board: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  gameOver = false;
  message = '';

  scoreX$ = scoreRepository.playerX$;
  scoreO$ = scoreRepository.playerO$;

  play(index: number) {
    if (this.board[index] || this.gameOver) return;

    this.board[index] = this.currentPlayer;

    if (this.checkWin()) {
      this.gameOver = true;
      this.message = `Le joueur ${this.currentPlayer} a gagné !`;

      if (this.currentPlayer === 'X') scoreRepository.incrementX();
      else scoreRepository.incrementO();

      return;
    }

    if (this.board.every((cell) => cell !== '')) {
      this.gameOver = true;
      this.message = 'Match nul !';
      return;
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  resetBoard() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.message = '';
  }

  checkWin(): boolean {
    const combos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6],         
    ];

    return combos.some(([a, b, c]) =>
      this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[a] === this.board[c]
    );
  }
}
