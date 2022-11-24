import prompt from "prompt";

export const userSelection: prompt.RevalidatorSchema = {
  description: "Digite o ID do usuário para selecionar",
  type: "integer",
  required: true,
  name: "selectedUser",
};

export const menuSelection: prompt.RevalidatorSchema = {
  description: "Selecione a operação",
  type: "integer",
  required: true,
  name: "selectedMenu",
};

export const threadSelection: prompt.RevalidatorSchema = {
  description: "Informe o conteúdo da thread",
  type: "string",
  required: true,
  name: "selectedThread",
};

export const threadIdSelection: prompt.RevalidatorSchema = {
  description: "Informe o ID da thread",
  type: "integer",
  required: true,
  name: "selectedThreadId",
};
