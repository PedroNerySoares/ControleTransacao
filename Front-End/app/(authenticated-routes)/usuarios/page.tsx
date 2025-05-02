"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import GridUsuarios from "@/app/components/GridUsuarios";
import { IUsuario } from "@/app/interfaces/IUsuario";
import { getRoles, getUsuarios, postCreateUser } from "@/libs/fetchsApi";
import { toast, ToastContainer } from "react-toastify";



export default function Usuarios() {
  const { data: session, status } = useSession();

  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const [rolesDisponiveis, setRolesDisponiveis] = useState<IRole[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [novoEmail, setNovoEmail] = useState("");
  const [novoUsuario, setNovoUsuario] = useState("");
  const [roleSelecionada, setRoleSelecionada] = useState("0");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      carregarUsuarios();
      carregarRoles();
    }
  }, [status, session]);

  const carregarUsuarios = async () => {
    const token = session?.user.accessToken;
  
    if (!token) { 
      toast.error("Access token não disponível!");
      return;
    }
  
    const data = await getUsuarios(token);
    setUsuarios(data || []);
  };
  
  const carregarRoles = async () => {
    const token = session?.user.accessToken;
  
    if (!token) { 
      toast.error("Access token não disponível!");
      return;
    }
  
    const data = await getRoles(token);
    const rolesJson = await data.json();
    setRolesDisponiveis(rolesJson || []);
  };

  const handleAdicionarUsuario = async () => {
    const token = session?.user.accessToken;
  
    if (!token) {
      toast.error("Access token não disponível!");
      return;
    }
  
    const toastId = toast.loading("Criando usuário...");
    const resp = await postCreateUser(token, {
     
      email: novoEmail,
      usuario: novoUsuario,
    }, Number(roleSelecionada));
  
    if (resp.ok) {
      toast.update(toastId, {
        render: "Usuário criado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(toastId, {
        render: "Erro ao criar usuário!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  
    setShowModal(false);
    setNovoEmail("");
    setNovoUsuario("");
    setRoleSelecionada("0");
    carregarUsuarios();
  };
  

  const renderModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Novo Usuário</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Usuário</label>
          <input
            type="text"
            value={novoUsuario}
            onChange={(e) => setNovoUsuario(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Perfil do Usuário</label>
          <select
            value={roleSelecionada}
            onChange={(e) => setRoleSelecionada(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="0">Selecione um perfil</option>
            {rolesDisponiveis.map((role) => (
              <option key={role.id} value={role.id.toString()}>
                {role.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleAdicionarUsuario}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Usuários Cadastrados</h1>
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-lg"
        >
          +
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <GridUsuarios data={usuarios} />
      </div>

      {showModal && renderModal()}

      <ToastContainer position="top-right" />
    </main>
  );
}
