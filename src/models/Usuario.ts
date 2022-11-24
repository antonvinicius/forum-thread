import { IOperacionavel } from "../interfaces/IOperacionavel";
import { generateId } from "../util/idGenerator";
import { Thread } from "./Thread";

export abstract class Usuario implements IOperacionavel {
  private _id: number;
  protected _isAdmin: Boolean;
  protected isAtivo: Boolean;

  constructor(
    private _username: string,
    private _nome: string,
    private _email: string
  ) {
    this._id = generateId();
    this.isAtivo = true;
    this._isAdmin = false;
  }

  abstract criarThread(conteudo: string): void;
  abstract editarThread(oldId: number, threadAtualizada: Thread): void;
  abstract responderThead(conteudo: string, threadAlvo: Thread): void;
  abstract excluirThread(threadId: number): void;

  public get id(): number {
    return this._id;
  }

  public get isAdmin(): Boolean {
    return this._isAdmin;
  }

  public get username(): string {
    return this._username;
  }
  protected set username(value: string) {
    this._username = value;
  }

  public get nome(): string {
    return this._nome;
  }
  protected set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }
  protected set email(value: string) {
    this._email = value;
  }

  toString(): string {
    return `ID: ${this.id} | Username: ${this.username} | Email: ${this.email} | Nome: ${this.nome} | IsAdmin: ${this._isAdmin} | IsAtivo: ${this.isAtivo}`;
  }
}
