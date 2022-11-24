import { Thread } from "../models/Thread";

export interface IOperacionavel {
  criarThread(conteudo: string): void;
  editarThread(oldId: number, threadAtualizada: Thread): void;
  responderThead(conteudo: string, threadAlvo: Thread): void;
  excluirThread(threadId: number): void;
}
