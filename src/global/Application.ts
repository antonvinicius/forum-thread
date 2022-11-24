import { Usuario } from "../models/Usuario";

export class Application {
  private static authorizedUser: Usuario;

  static loginUser(user: Usuario) {
    this.authorizedUser = user;
  }

  static getUser(): Usuario {
    return this.authorizedUser;
  }
}
