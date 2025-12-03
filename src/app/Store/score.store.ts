import { createStore, select, withProps } from '@ngneat/elf';
import {
  persistState,
  localStorageStrategy,
  excludeKeys,
} from '@ngneat/elf-persist-state';

export interface ScoreState {
  playerX: number;
  playerO: number;
}

const scoreStore = createStore(
  { name: 'score' },
  withProps<ScoreState>({
    playerX: 0,
    playerO: 0,
  })
);

persistState(scoreStore, {
  key: 'score',
  storage: localStorageStrategy,
  source: () => scoreStore.pipe(excludeKeys([])),
});

export class ScoreRepository {
  playerX$ = scoreStore.pipe(select((state) => state.playerX));
  playerO$ = scoreStore.pipe(select((state) => state.playerO));

  incrementX() {
    scoreStore.update((state) => ({
      ...state,
      playerX: state.playerX + 1,
    }));
  }

  incrementO() {
    scoreStore.update((state) => ({
      ...state,
      playerO: state.playerO + 1,
    }));
  }

  reset() {
    scoreStore.update(() => ({
      playerX: 0,
      playerO: 0,
    }));
  }
}

export const scoreRepository = new ScoreRepository();
