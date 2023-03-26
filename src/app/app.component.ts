import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VariacaoAtivo } from './Models/VariacaoAtivo';
import { VariacaoAtivoService } from './Services/variacao-ativo.servico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Variação Ativos';
  constructor(
    public variacaoAtivoService: VariacaoAtivoService,
    public toastService: ToastrService,
  ) {}

  public ativo : string | undefined;
  public loadingBtn = false;
  public listVariacaoAtivos: VariacaoAtivo[] | undefined;

  ngOnInit() {}

  ConsultarVariacaoAtivo() {
    this.loadingBtn = true;
    this.variacaoAtivoService.consultarVariacaoAtivo(this.ativo).subscribe(
      (result: any): void => {
        debugger;
        this.loadingBtn = false;
        this.listVariacaoAtivos = result;
      },
      (error: any) => {
       this.loadingBtn = false;
        let msg_erro = error.error.friendlyMsg;
        this.toastService.error(msg_erro, 'Erro');
      },
      () => { }
    )
  }
}
