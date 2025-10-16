"use client";
import GridUsuarios from "@/app/components/GridUsuarios";
import { IUsuario } from "@/app/interfaces/IUsuario";
import { getUsuarios, postCreateUser } from "@/libs/fetchsApi";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const { data: session, status } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [novoEmail, setNovoEmail] = useState("");
  const [novoUsuario, setNovoUsuario] = useState("");

  const perfil = [
    {
      id: 1,
      Name: "Administrador"
    },
    {
      id: 2,
      Name: "Usuário"
    },
    {
      id: 3,
      Name: "Auditor"
    },
  ]


  async function fetchData() {
    const token = session?.user.accessToken;
    const data = await getUsuarios(token);
    setUsuarios(data || []);
  }

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      fetchData();
    }
  }, [status, session]);

  function handleAdicionarUsuario() {
    const response = postCreateUser(session?.user.accessToken, {
      id: 0,
      email: novoEmail,
      usuario: novoUsuario
    });
    setShowModal(false);
  }

  return (
    <>
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

        {showModal && (
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
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Perfil</label>
                <select
                  // value={sexo}
                  // onChange={(e) => setSexo(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                >
                  {
                    perfil.map((perfil, index) => (
                      <option key={index} value={perfil.id}>{perfil.Name}</option>
                    ))
                  }
                  {/* <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                  <option value="prefiro_nao_dizer">Prefiro não dizer</option> */}
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
        )}
      </main>
    </>
  );
}
