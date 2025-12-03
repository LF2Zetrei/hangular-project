import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TikTakToe } from './tik-tak-toe';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { scoreRepository } from '../../Store/score.store';
import { of } from 'rxjs';

describe('TikTakToe Component', () => {
  let component: TikTakToe;
  let fixture: ComponentFixture<TikTakToe>;

  const scoreRepoMock = {
    playerX$: of(0),
    playerO$: of(0),
    incrementX: jasmine.createSpy('incrementX'),
    incrementO: jasmine.createSpy('incrementO'),
    reset: jasmine.createSpy('reset'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TikTakToe, AsyncPipe, NgFor, NgIf],
      providers: [{ provide: scoreRepository.constructor, useValue: scoreRepoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TikTakToe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start with empty board', () => {
    expect(component.board).toEqual(Array(9).fill(''));
    expect(component.currentPlayer).toBe('X');
    expect(component.gameOver).toBeFalse();
  });

  it('should place X and switch to O', () => {
    component.play(0);
    expect(component.board[0]).toBe('X');
    expect(component.currentPlayer).toBe('O');
  });

  it('should detect a win for X', () => {
    component.board = ['X','X','','O','O','','','',''];
    component.currentPlayer = 'X';
    component.play(2); // X gagne
    expect(component.gameOver).toBeTrue();
    expect(component.message).toContain('X a gagné');
    expect(scoreRepoMock.incrementX).toHaveBeenCalled();
  });

  it('should detect a draw', () => {
    component.board = ['X','O','X','X','O','O','O','X',''];
    component.currentPlayer = 'X';
    component.play(8);
    expect(component.gameOver).toBeTrue();
    expect(component.message).toContain('Match nul');
  });

  it('should reset the board', () => {
    component.board = ['X','O','X','','','','','',''];
    component.gameOver = true;
    component.resetBoard();
    expect(component.board).toEqual(Array(9).fill(''));
    expect(component.gameOver).toBeFalse();
    expect(component.currentPlayer).toBe('X');
    expect(component.message).toBe('');
  });
});
