import { Component } from '@angular/core';
import { AsyncPipe, NgIf, NgStyle } from '@angular/common';
import { scoreRepository } from '../../Store/score.store';

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgStyle],
  templateUrl: './statistiques.html',
  styleUrl: './statistiques.css',
})
export class Statistiques {
  scoreX$ = scoreRepository.playerX$;
  scoreO$ = scoreRepository.playerO$;
}
