
import { IChangeDatasUser } from "@/app/interfaces/IChangeDatasUser";
import { IChangePassword } from "@/app/interfaces/IChangePassword";
import { ITransacao } from "@/app/interfaces/ITransacao";
import { ITransacaoDetalhe } from "@/app/interfaces/ITransacaoDetalhe";
import { IUsuario } from "@/app/interfaces/IUsuario";


const BASEURL = "http://192.168.0.135:8080";


// ***************** Requisções Login ************************>>
export async function PostResetPassword(email: String) {
  const response = await fetch(`${BASEURL}/login/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usuario: email,
      senha: null,
    }),
  });
  return await response;
}
// ***************** ********************************************>>

// ***************** Requisções Usuarios ************************>>
export async function getUsuarios(token: string) {


  const response = await fetch(`${BASEURL}/usuario`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();
}
export async function getDataUser(token: string, idUser: String) {

  const response = await fetch(`${BASEURL}/usuario/${idUser}`, {
    method: "get",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });


  return response

}
export async function postCreateUser(token: string, { id, email, usuario, authorities }: IUsuario, roleId: Number) {

  const response = await fetch(`${BASEURL}/usuario`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario: usuario,
      email: email,
      idRole: roleId
    })
  });
  return await response;
}
export async function putChangeDatasUser(token: string, idUser: String, data: IChangeDatasUser) {

  const response = await fetch(`${BASEURL}/usuario/settingsUser/${idUser}`, {
    method: "PUT",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      primeiroNome: data.primeiroNome,
      ultimoNome: data.ultimoNome,
      cpf: data.cpf,
      dateNascimento: data.dataNascimento,
      sexo: data.sexo,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      estado: data.estado,
      cep: data.cep,
      rua:data.rua,
      municipio:data.municipio
    })
  });


  return response

}
export async function putChangePassword(token: string, idUser: String, data: IChangePassword) {


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

  return await response;
}
export async function deleteUser(token: string, idUser: String) {


  const response = await fetch(`${BASEURL}/usuario/${idUser}`, {
    method: "Delete",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });


  return await response;
}

// <<****************************************************************
// ********************* Requisções Roles *************************>>

export async function getRoles(token: string) {


  const response = await fetch(`${BASEURL}/roles`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response;
}

// ******************************************************************>>
// ********************* Requisções Arquivo *************************>>


export async function getArquivo(token: string) {

  const response = await fetch(`${BASEURL}/arquivo`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();

}
export async function getDatasTransacao(token: String) {
  const response = await fetch(`${BASEURL}/arquivo/recuperaAnoMes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();

}
export async function PostArquivo(token: string, name: string, size: number, dadosImportados: Object) {
  const response = await fetch(`${BASEURL}/arquivo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      nomeArquivo: name,
      tamanhoArquivo: size,
      listaTransacao: dadosImportados,
    }),
  });

  return await response;

}
export async function deleteArquivo(token: String, idArquivo: String) {
  const response = await fetch(`${BASEURL}/arquivo/${idArquivo}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response;

}
// <<****************************************************************


// ********************* Requisções Transação **************************>>
export async function getArquivoDetalhes(token: string, idArquivo: string) {

  const response = await fetch(`${BASEURL}/arquivo/${idArquivo}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
 
  return response ;
}


export async function getTransacaoSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();
}
export async function getTransacaoContaSuspeita(token: string, dtmesref: string) {

  const response = await fetch(`${BASEURL}/transacao/suspeita/conta/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();
}
export async function getTransacaoAgenciaSuspeita(token: string, dtmesref: string) {


  const response = await fetch(`${BASEURL}/transacao/suspeita/agencia/${dtmesref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return await response.json();
}
// <<*******************************************************************>>


export async function PostUploadImg(token: string, data: any) {
  const response = await fetch(`${BASEURL}/imagens/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,

    },

    body: data
  });
  return await response;
}