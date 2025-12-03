import { createStore, select, withProps} from '@ngneat/elf'
import { addEntities, selectAllEntities, selectFirst, selectLast, setEntities, withEntities} from '@ngneat/elf-entities'
import { Joke } from '../features/chuch-norris/joke'

const jokeStore = createStore({name: 'jokes'}, withEntities<Joke>());

export class JokeRepository {
    jokes$ = jokeStore.pipe(selectAllEntities());

    first$ = jokeStore.pipe(selectFirst());

    last$ = jokeStore.pipe(selectLast());

    addJokes(joke: Joke) {
        jokeStore.update(addEntities(joke));
    }
}