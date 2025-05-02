"use client";

import { SyntheticEvent, useState, useEffect } from "react";
import { IUsuario } from "../interfaces/IUsuario";
import ModalStandart from "./Modal";
import { useSession } from "next-auth/react";
import { deleteUser, PostResetPassword, putChangePassword } from "@/libs/fetchsApi";
import TableRow from "./Table/TableRow";
import { toast } from "react-toastify";

interface PropsUsuarios {
  data: IUsuario[];
}

export default function GridUsuarios({ data }: PropsUsuarios) {
  const [usuarios, setUsuarios] = useState<IUsuario[]>(data);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<IUsuario | null>(null);
  const [modalAberto, setModalAberto] = useState<{ [key: string]: boolean }>({
    editar: false,
    excluir: false,
    reset: false,
  });
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [senhaNova, setSenhaNova] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    setUsuarios(data);
  }, [data]);

  const toggleModal = (modalType: string, usuario?: IUsuario) => {
    setUsuarioSelecionado(usuario ?? null);
    setModalAberto((prevState) => ({
      ...prevState,
      [modalType]: !prevState[modalType],
    }));
  };

  const handleChangePassword = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!usuarioSelecionado || !usuarioSelecionado.id) return;
    const token = session?.user.accessToken;
    if (!token) {
      toast.error("Access token não disponível!");
      return;
    }


    await putChangePassword(token, usuarioSelecionado.id, {
      email: usuarioSelecionado.email,
      oldPassword: senhaAntiga,
      newPassword: senhaNova,
    });

    toggleModal("editar");
  };

  const handleDeleteUser = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!usuarioSelecionado || !usuarioSelecionado.id) return;
    const token = session?.user.accessToken;
    if (!token) {
      toast.error("Access token não disponível!");
      return;
    }


    const res = await deleteUser(token, usuarioSelecionado.id);
    if (res) {
      toggleModal("excluir");
      toast.success("Usuário excluído com sucesso!");
    } else {
      toast.error("Erro ao excluir o usuário!");
    }
  };
  const handleResetPassword = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!usuarioSelecionado) return;

    const toastId = toast.loading("Resetando a senha...");
    const res = await PostResetPassword(usuarioSelecionado.email);
    if (res) {
      toggleModal("reset");
      toast.update(toastId, {
        isLoading: false,
        type: "success",
        render: "Senha resetada com sucesso!",
        autoClose: 3000
      });
    } else {
      toast.update(toastId, {
        isLoading: false,
        type: "error",
        render: "Erro ao resetar a senha do usuário!",
        autoClose: 3000
      });
    }
  };

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
            {usuarios.map((usuario, index) => (
              <TableRow key={index} index={index}>
                <td className="px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {usuario.usuario.toUpperCase()}
                </td>

                <td className="px-4 py-2">
                  {usuario.authorities!.length > 0 ? usuario.authorities![0].authority : ""}
                </td>

                <td className="px-4 py-2">{usuario.email.toUpperCase()}</td>

                <td className="px-4 py-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => toggleModal("reset", usuario)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Resetar a senha
                  </button>
                  <button disabled
                    onClick={() => toggleModal("editar", usuario)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => toggleModal("excluir", usuario)}
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

      {/* Modal Editar */}
      <ModalStandart isOpen={modalAberto.editar}>
        <h2 className="text-xl font-bold mb-4">Trocar senha</h2>
        <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={(usuarioSelecionado?.email ?? "").toString()}
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
              onClick={() => toggleModal("editar")}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
            >
              Confirmar
            </button>
          </div>
        </form>
      </ModalStandart>

      {/* Modal Confirmar Exclusão */}
      <ModalStandart isOpen={modalAberto.excluir}>
        <h2 className="text-lg font-semibold mb-4">
          Deseja realmente excluir <strong>{usuarioSelecionado?.usuario}</strong>?
        </h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
            onClick={() => toggleModal("excluir")}
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
      </ModalStandart>

      {/* Modal Resetar Senha */}
      <ModalStandart isOpen={modalAberto.reset}>
        <h2 className="text-lg font-semibold mb-4">
          Deseja realmente resetar a senha do usuário: <strong>{usuarioSelecionado?.usuario}</strong>?
        </h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded"
            onClick={() => toggleModal("reset")}
          >
            Cancelar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
            onClick={handleResetPassword}
          >
            Confirmar reset
          </button>
        </div>
      </ModalStandart>
    </>
  );
}
