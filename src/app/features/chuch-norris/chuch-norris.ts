import { HttpClient } from '@angular/common/http';
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, BehaviorSubject, catchError, firstValueFrom, map, of, async, filter } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Joke } from './joke';
import { FormsModule } from '@angular/forms';
import { JokeRepository } from '../../Store/joke-store';

@Component({
  selector: 'app-chuch-norris',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe],
  templateUrl: './chuch-norris.html',
  styleUrls: ['./chuch-norris.css']
})
export class ChuchNorris {
  jokeRepository = new JokeRepository();

  private http = inject(HttpClient);
  private catsSubject = new BehaviorSubject<string[]>([]);
  public cats = this.catsSubject.asObservable(); 

  private catSubject = new BehaviorSubject<string>('');
  public cat = this.catSubject.asObservable();

  textValue: string  = '';

  setCat(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.catSubject.next(target.value);
  }

  public joke?: Joke;

  protected readonly title = signal('chucknorris');

  ngOnInit() {
    this.setCategories();
    const init: Joke = {
      icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
      id: '0',
      value: 'Si le css avait été fait par Chuck Norris, il aurait été mieux'
    };
    this.jokeRepository.addJokes(init);

    this.jokeRepository.last$
    .subscribe(joke => {
      if (joke) this.joke = joke;
    });
  }

  get_jokes_cat() {
    return this.http.get<string[]>("https://api.chucknorris.io/jokes/categories");
  }

  setCategories() {
    this.get_jokes_cat().pipe(
      catchError((error) => {
        this.catsSubject.error('An error occured');
        return [];
      }),
      map((cat) => {
        return cat;
      })
    ).subscribe((cat) => {
      this.catsSubject.next(cat);
    });
  }

  get_random_joke(): Observable<Joke> {
  const category = this.catSubject.value;
  let url;

  if ((category === '') || (category === 'toutes')) {
    url = 'https://api.chucknorris.io/jokes/random';
  } else {
    url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  }
     
    

  return this.http.get<Joke>(url).pipe(
    catchError(err => {
      console.error('Erreur API:', err);
      return of({ value: 'Impossible de récupérer une blague', icon_url: '' } as Joke);
    })
  );
}


  onSubmit() {
  this.http
    .get<{ total: number; result: Joke[] }>(
      "https://api.chucknorris.io/jokes/search?query=" + this.textValue
    )
    .pipe(
      catchError(err => {
        console.error('Erreur API');
        return of({ total: 0, result: [] });
      })
    )
    .subscribe(res => {
      if (res.result.length === 0) {
        this.joke = { value: "Aucune blague trouvée" } as Joke;
        return;
      }

      const randomIndex = Math.floor(Math.random() * res.result.length);
      let temp = res.result[randomIndex];
      this.joke = temp
      this.jokeRepository.addJokes(temp)
    });
}

  loadJoke() {
    this.get_random_joke().subscribe(j => {
      this.joke = j; 
      this.jokeRepository.addJokes(j);
    });
  }
}
