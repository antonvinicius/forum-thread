import { Admin } from "../../models/Admin";
import { Cliente } from "../../models/Cliente";
import { UsuarioRepositorio } from "../UsuarioRepositorio";

export function seedUsers() {
  UsuarioRepositorio.adicionar(new Admin("admin", "admin", "admin@email.com"));
  UsuarioRepositorio.adicionar(
    new Cliente("joaobfern", "João Fernando", "joaob@email.com")
  );
  UsuarioRepositorio.adicionar(
    new Cliente("carlosedu", "Carlos Eduardo", "carlosedu@email.com")
  );
  UsuarioRepositorio.adicionar(
    new Cliente("joaquine293", "Joaquine Laurice", "joaquinel092@email.com")
  );
}
