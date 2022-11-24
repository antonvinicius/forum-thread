import { ThreadRepositorio } from "../data/ThreadRepositorio";
import { Thread } from "./Thread";
import { Usuario } from "./Usuario";

export class Admin extends Usuario {
  constructor(username: string, nome: string, email: string) {
    super(username, nome, email);
    this._isAdmin = true;
  }

  fornecerAcesso(usuario: Usuario): Usuario {
    return new Admin(usuario.username, usuario.nome, usuario.email);
  }

  criarThread(conteudo: string): void {
    ThreadRepositorio.adicionar(new Thread(conteudo, this));
  }
  editarThread(oldId: number, threadAtualizada: Thread): void {
    ThreadRepositorio.atualizar(oldId, threadAtualizada);
  }
  responderThead(conteudo: string, threadAlvo: Thread): void {
    threadAlvo.adicionarSubThread(new Thread(conteudo, this));
  }
  excluirThread(threadId: number): void {
    ThreadRepositorio.remover(threadId);
  }
}
