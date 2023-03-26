import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VariacaoAtivoService {

  private urlBase = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) { }

  consultarVariacaoAtivo(ativo : any): any {
    return this.http.get(this.urlBase + 
                        'api/ativos/consultarVariacaoAtivos?ativo=' + ativo)
                        .pipe(map(response => response));
}
 
}
