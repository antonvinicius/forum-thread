import { Thread } from "../../models/Thread";
import { ThreadRepositorio } from "../ThreadRepositorio";
import { UsuarioRepositorio } from "../UsuarioRepositorio";

export function seedThreads() {
  const admin = UsuarioRepositorio.ler()[0];
  const user1 = UsuarioRepositorio.ler()[1];
  ThreadRepositorio.adicionar(new Thread("Conteúdo 1", admin));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 2", admin));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 3", admin));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 4", admin));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 5", admin));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 6", user1));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 7", user1));
  ThreadRepositorio.adicionar(new Thread("Conteúdo 8", user1));
}
