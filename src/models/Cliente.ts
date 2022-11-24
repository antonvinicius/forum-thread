import { ThreadRepositorio } from "../data/ThreadRepositorio";
import { Thread } from "./Thread";
import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
  criarThread(conteudo: string): void {
    ThreadRepositorio.adicionar(new Thread(conteudo, this));
  }
  editarThread(oldId: number, threadAtualizada: Thread): void {
    const thread = ThreadRepositorio.lerPorId(oldId);
    if (thread?.getUsuario().id != this.id) {
      console.error("ERROR: Permissão negada");
      return;
    }
    ThreadRepositorio.atualizar(oldId, threadAtualizada);
  }
  responderThead(conteudo: string, threadAlvo: Thread): void {
    threadAlvo.adicionarSubThread(new Thread(conteudo, this));
  }
  excluirThread(threadId: number): void {
    const thread = ThreadRepositorio.lerPorId(threadId);
    if (thread?.getUsuario() != this) {
      console.error("ERROR: Permissão negada");
      return;
    }
    ThreadRepositorio.remover(threadId);
  }
}
