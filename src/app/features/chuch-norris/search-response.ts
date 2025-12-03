import { Joke } from "./joke";

export interface SearchResponse {
  total: number;
  result: Joke[];
}