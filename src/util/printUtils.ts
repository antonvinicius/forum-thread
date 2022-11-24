import { ThreadRepositorio } from "../data/ThreadRepositorio";
import { UsuarioRepositorio } from "../data/UsuarioRepositorio";
import { Thread } from "../models/Thread";

export function printMenu() {
  console.log("[0] Sair");
  console.log("[1] Mostrar threads");
  console.log("[2] Mostrar respostas de uma thread");
  console.log("[3] Criar nova thread");
  console.log("[4] Editar thread");
  console.log("[5] Responder thread");
  console.log("[6] Excluir thread");
}

export function printUsuarios() {
  UsuarioRepositorio.ler().forEach((usuario) => {
    console.log(usuario.toString());
  });
}

export function printThreads() {
  ThreadRepositorio.ler().forEach((thread) => {
    console.log(thread.toString());
  });
}

export function printThreadRespostas(thread: Thread) {
  console.log(thread.toString());
  thread.lerRespostas().forEach((t) => {
    console.log(`--------- ${t.toString()}`);
  });
  if (thread.lerRespostas().length === 0)
    console.log("Thread não possui respostas.");
}
