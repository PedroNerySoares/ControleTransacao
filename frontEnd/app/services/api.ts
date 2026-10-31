


import type { UsuarioDetails } from "@/app/types/usuario";

const BASEURL = "http://192.168.0.135:8080";

async function ensureResponseOk(response: Response): Promise<void> {
  if (response.ok) return;

  let message = response.statusText
    ? `${response.status} ${response.statusText}`
    : `Erro na requisição (${response.status}).`;

  const bodyText = await response.text();
  if (bodyText) {
    let body: unknown = undefined;
    try {
      body = JSON.parse(bodyText);
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error;
    }

    if (
      typeof body === "object" &&
      body !== null &&
      "message" in body &&
      typeof body.message === "string" &&
      body.message.trim()
    ) {
      message = body.message;
    }
  }

  throw new Error(message);
}


//arquivo
export async function getArquivo(token: string) {

  const response = await fetch(`${BASEURL}/arquivo`, {

    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();

}

export async function postArquivo(token: string, file: File) {
  const formData = new FormData();
  formData.append("files", file);

  const response = await fetch(`${BASEURL}/arquivo`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  await ensureResponseOk(response);

  return await response.text();
}
export async function getArquivoId(token: string, id: number) {

  const response = await fetch(`${BASEURL}/arquivo/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await ensureResponseOk(response);
  return await response.json();

}

// Usuarios
export async function getMe(token: string) {


  const response = await fetch(`${BASEURL}/usuario/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();
}
export async function getUsuarios(token: string) {
  const response = await fetch(`${BASEURL}/usuario`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();
}
export async function putChangePassword(
  token: string,
  idUser: number,
  data: { email: string; oldPassword: string; newPassword: string },
) {


  const response = await fetch(`${BASEURL}/usuario/${idUser}`, {
    method: "PUT",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.email,
      antigaSenha: data.oldPassword,
      novaSenha: data.newPassword
    })
  });

  await ensureResponseOk(response);
  return await response.json();
}
export async function putChangeDatasUser(token: string, idUser: number, data: UsuarioDetails) {

  const response = await fetch(`${BASEURL}/usuario/settingsUser`, {
    method: "PUT",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  await ensureResponseOk(response);
  return response

}
export async function deleteUser(token: string, idUser: number) {


  const response = await fetch(`${BASEURL}/usuario/${idUser}`, {
    method: "Delete",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  await ensureResponseOk(response);
  return await response;
}

export async function postCreateUser(
  token: string,
  { email, usuario, idRole }: { email: string; usuario: string, idRole: number },
) {

  const response = await fetch(`${BASEURL}/usuario`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario,
      email,
      idRole

    })
  });

  await ensureResponseOk(response);
  return await response.json();
}
// Transação
export async function getTransacaoSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();
}
export async function getTransacaoContaSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/conta/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();
}
export async function getTransacaoAgenciaSuspeita(token: string, dtmesref: string) {


  const response = await fetch(`${BASEURL}/transacao/suspeita/agencia/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();
}



export async function getDashboard(token: string) {

  const response = await fetch(`${BASEURL}/transacao/dashboard`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await ensureResponseOk(response);
  return await response.json();

}
export async function getDashboard2(token: string) {

  const response = await fetch(`${BASEURL}/transacao/teste`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await ensureResponseOk(response);
  return await response.json();

}



export async function getAnoMes(token: string) {
  const response = await fetch(`${BASEURL}/arquivo/recuperaAnoMes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();

}




// Arquivo

export type ConfiguracoesDTO = {
  valorTransacaoSuspeito: number;
  valorAgenciaSuspeito: number;
  valorContaSuspeito: number;
};

export async function getConfiguracoes(
  token: string
): Promise<ConfiguracoesDTO> {
  const response = await fetch(`${BASEURL}/configuracoes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  await ensureResponseOk(response);
  return await response.json();

}

export async function atualizarConfiguracoes(
  token: string,
  configuracoes: ConfiguracoesDTO
): Promise<void> {
  const response = await fetch(`${BASEURL}/configuracoes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(configuracoes),
  });

  await ensureResponseOk(response);
}