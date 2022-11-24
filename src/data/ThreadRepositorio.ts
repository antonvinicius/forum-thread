import { Thread } from "../models/Thread";

export class ThreadRepositorio {
  private static threads: Thread[] = [];

  static adicionar(thread: Thread) {
    this.threads.push(thread);
  }

  static remover(id: number) {
    const oldThread = this.threads.find((t) => t.id === id);
    if (oldThread) {
      this.threads.splice(this.threads.indexOf(oldThread), 1);
    }
  }

  static atualizar(id: number, novaThread: Thread) {
    novaThread.atualizarData();
    const targetThread = this.threads.find((t) => t.id === id);
    if (targetThread) {
      const targetIndex = this.threads.indexOf(targetThread);
      this.threads[targetIndex] = novaThread;
    }
  }

  static ler(): Thread[] {
    return this.threads;
  }

  static lerPorId(id: number): Thread | undefined {
    return this.threads.find((t) => t.id === id);
  }
}
