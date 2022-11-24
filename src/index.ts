import prompt from "prompt";
import { seedDatabase } from "./data/seed";
import { ThreadRepositorio } from "./data/ThreadRepositorio";
import { UsuarioRepositorio } from "./data/UsuarioRepositorio";
import { Application } from "./global/Application";
import { Thread } from "./models/Thread";
import {
  printMenu,
  printThreadRespostas,
  printThreads,
  printUsuarios,
} from "./util/printUtils";
import {
  menuSelection,
  threadIdSelection,
  threadSelection,
  userSelection,
} from "./util/promptSchemas";

prompt.message = "| Fórum Thread |";
prompt.start();

async function main() {
  seedDatabase();

  printUsuarios();
  const { selectedUser } = await prompt.get(userSelection);
  const user = UsuarioRepositorio.lerPorId(selectedUser as number);

  if (!user) {
    console.error("Erro: Usuário inválido");
    return;
  } else {
    console.log(`Usuário selecionado com sucesso\n ${user.toString()}`);
    Application.loginUser(user);
  }

  let menu = -1;
  do {
    printMenu();

    const { selectedMenu } = await prompt.get(menuSelection);
    menu = selectedMenu as number;

    switch (menu) {
      case 1:
        printThreads();
        break;

      case 2:
        {
          printThreads();
          const { selectedThreadId } = await prompt.get(threadIdSelection);
          const thread = ThreadRepositorio.lerPorId(selectedThreadId as number);
          if (thread) {
            printThreadRespostas(thread);
          } else {
            console.log("Thread inválida.");
          }
        }
        break;

      case 3:
        const { selectedThread } = await prompt.get(threadSelection);
        user.criarThread(selectedThread as string);
        break;
      default:
        break;

      case 4:
        {
          printThreads();
          const { selectedThreadId } = await prompt.get(threadIdSelection);
          const thread = ThreadRepositorio.lerPorId(selectedThreadId as number);

          if (thread) {
            const { selectedThread } = await prompt.get(threadSelection);
            user.editarThread(
              selectedThreadId as number,
              new Thread(selectedThread as string, thread.getUsuario())
            );
          } else {
            console.log("Thread inválida");
          }
        }
        break;

      case 5:
        {
          printThreads();
          const { selectedThreadId } = await prompt.get(threadIdSelection);
          const thread = ThreadRepositorio.lerPorId(selectedThreadId as number);
          if (thread) {
            const { selectedThread } = await prompt.get(threadSelection);
            user.responderThead(selectedThread as string, thread);
          } else {
            console.log("Thread inválida");
          }
        }
        break;

      case 6:
        {
          printThreads();
          const { selectedThreadId } = await prompt.get(threadIdSelection);
          user.excluirThread(selectedThreadId as number);
        }
        break;
    }
  } while (menu != 0);
}

main();
