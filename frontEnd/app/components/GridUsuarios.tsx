"use client";

import { SyntheticEvent, useState } from "react";
import { IUsuario } from "../interfaces/IUsuario";
import ModalUsuario from "./modalUsuario";
import { useSession } from "next-auth/react";
import { deleteUser, putChangePassword } from "@/libs/fetchsApi";
import TableRow from "./table/tableRow";

interface propsUsuarios {
  data: IUsuario[];
}

export default function GridUsuarios(props: propsUsuarios) {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<IUsuario>();
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [senhaNova, setSenhaNova] = useState("");

  const { data: session } = useSession();

  const abrirModalEditar = (usuario: IUsuario) => {
    setUsuarioSelecionado(usuario);
    setModalEditarAberto(true);
  };

  const abrirModalExcluir = (usuario: IUsuario) => {
    setUsuarioSelecionado(usuario);
    setModalExcluirAberto(true);
  };

  const fecharModal = () => {
    setModalEditarAberto(false);
    setModalExcluirAberto(false);
    setSenhaAntiga("");
    setSenhaNova("");
  };

  async function handleChangePassword(event: SyntheticEvent) {


    event.preventDefault();

    const res = await putChangePassword(session?.user.accessToken, usuarioSelecionado?.id, {
      email: usuarioSelecionado?.email,
      oldPassword: senhaAntiga,
      newPassword: senhaNova,




    })
  }

  async function handleDeleteUser(event: SyntheticEvent) {


    event.preventDefault();

    const res = await deleteUser(session?.user.accessToken, usuarioSelecionado?.id)
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-2">Nome do usuário</th>
              <th className="px-4 py-2">Perfil</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Ação</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((usuario, index) => (
              <TableRow index={index}   >
                <td className="px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {usuario.usuario.toUpperCase()}
                </td>
                <td className="px-4 py-2">{"Administrador".toUpperCase()}</td>
                <td className="px-4 py-2">{usuario.email.toUpperCase()}</td>
                <td className="px-4 py-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => abrirModalEditar(usuario)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Trocar senha
                  </button>
                  <button
                    onClick={() => abrirModalEditar(usuario)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => abrirModalExcluir(usuario)}
                    className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Excluir
                  </button>

                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Trocar Senha */}
      <ModalUsuario isOpen={modalEditarAberto}>
        <h2 className="text-xl font-bold mb-4">Trocar senha</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={usuarioSelecionado?.email || ""}
              readOnly
              className="mt-1 w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha atual</label>
            <input
              type="password"
              value={senhaAntiga}
              onChange={(e) => setSenhaAntiga(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nova senha</label>
            <input
              type="password"
              value={senhaNova}
              onChange={(e) => setSenhaNova(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
              onClick={fecharModal}
            >
              Cancelar
            </button>
            <button
              onClick={handleChangePassword}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
            >
              Confirmar
            </button>
          </div>
        </form>
      </ModalUsuario>

      {/* Modal Confirmar Exclusão */}
      <ModalUsuario isOpen={modalExcluirAberto}>
        <h2 className="text-lg font-semibold mb-4">
          Deseja realmente excluir <strong>{usuarioSelecionado?.usuario}</strong>?
        </h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
            onClick={fecharModal}
          >
            Cancelar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
            onClick={handleDeleteUser}
          >
            Confirmar exclusão
          </button>
        </div>
      </ModalUsuario>
    </>
  );
}
