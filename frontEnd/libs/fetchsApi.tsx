
import { IChangeDatasUser } from "@/app/interfaces/iChangeDatasUser";
import { IChangePassword } from "@/app/interfaces/IChangePassword";
import { ITransacao } from "@/app/interfaces/ITransacao";
import { IUsuario } from "@/app/interfaces/IUsuario";


const BASEURL = "http://192.168.0.135:8080";

export async function getArquivo(token: string) {

  const response = await fetch(`${BASEURL}/arquivo`, {

    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();

}
export async function getMe(token: string) {


  const response = await fetch(`${BASEURL}/usuario/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
 
export async function getUsuarios(token: string) {


  const response = await fetch(`${BASEURL}/usuario`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
export async function putChangePassword(token: string, idUser: number, data: IChangePassword) {


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

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
export async function putChangeDatasUser(token: string, idUser: number, data: IChangeDatasUser) {

  const response = await fetch(`${BASEURL}/usuario/settingsUser`, {
    method: "PUT",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
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

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}

export async function postCreateUser(token: string, { id, email, usuario }: IUsuario) {

  const response = await fetch(`${BASEURL}/usuario`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario: usuario,
      email: email,
      idRole:2

    })
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
export async function getTransacaoSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
export async function getTransacaoContaSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/conta/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
export async function getTransacaoAgenciaSuspeita(token: string, dtmesref: string) {


  const response = await fetch(`${BASEURL}/transacao/suspeita/agencia/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}

export async function getDatasTransacao(token: String) {
  const response = await fetch(`${BASEURL}/arquivo/recuperaAnoMes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();

}