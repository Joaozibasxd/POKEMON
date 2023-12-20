import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root', // Isso significa que o serviço será um serviço raiz e estará disponível em toda a aplicação
})

export class PokemonAPIService {
  API_POKE = "https://pokeapi.co/api/v2/pokemon"

  constructor(
    private http: HttpClient
  ) {}

  consultaTodosPokemon(offSet: number, limit: number): Observable<any> {
    return this.http.get<any>(this.API_POKE + "?limit=" + limit + "&offset=" + offSet )
  }

  restURL(url: string) {
    return this.http.get<any>(url)
  }
}
