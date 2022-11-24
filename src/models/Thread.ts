import { generateId } from "../util/idGenerator";
import { Usuario } from "./Usuario";

export class Thread {
  private _id: number;
  private criadoEm: Date;
  private atualizadoEm: Date;
  private subThreads: Thread[];

  constructor(private conteudo: string, private usuario: Usuario) {
    this._id = generateId();
    this.criadoEm = new Date();
    this.atualizadoEm = new Date();
    this.subThreads = [];
  }

  adicionarSubThread(thread: Thread) {
    this.subThreads.push(thread);
  }

  lerRespostas(): Thread[] {
    return this.subThreads;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  atualizarData() {
    this.atualizadoEm = new Date();
  }

  public get id(): number {
    return this._id;
  }
  protected set id(value: number) {
    this._id = value;
  }

  toString(): string {
    return `ID: ${this._id} | Usuário: ${
      this.usuario.username
    } | Criado em: ${this.criadoEm.toLocaleDateString()} | Conteudo: ${
      this.conteudo
    } | Última atualização: ${this.atualizadoEm.toLocaleDateString()}`;
  }
}
