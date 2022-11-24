import { Usuario } from "../models/Usuario";

export class UsuarioRepositorio {
  private static usuarios: Usuario[] = [];

  static adicionar(thread: Usuario) {
    this.usuarios.push(thread);
  }

  static remover(id: number) {
    const oldThread = this.usuarios.find((t) => t.id === id);
    if (oldThread) {
      this.usuarios.splice(this.usuarios.indexOf(oldThread), 1);
    }
  }

  static atualizar(id: number, novaThread: Usuario) {
    const targetThread = this.usuarios.find((t) => t.id === id);
    if (targetThread) {
      const targetIndex = this.usuarios.indexOf(targetThread);
      this.usuarios[targetIndex] = novaThread;
    }
  }

  static ler(): Usuario[] {
    return this.usuarios;
  }

  static lerPorId(id: number): Usuario | undefined {
    return this.usuarios.find((u) => u.id === id);
  }
}
