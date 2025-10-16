"use client";

import { IChangeDatasUser } from "@/app/interfaces/iChangeDatasUser";
import { getMe, putChangeDatasUser } from "@/libs/fetchsApi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ImageAvatar from "../../../public/avatar.jpeg";

export default function SettingsUsuario() {
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [email, setEmail] = useState("usuario@email.com");
  const [cpf, setCpf] = useState("");
  const [dateNascimento, setDateNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [defaultData, setDefaultData] = useState<IChangeDatasUser>();
  const { data: session } = useSession();
 
  useEffect(() => {
    const fetchUserData = async () => {
      if (!session?.user?.accessToken) return;

      try {
        const userData = await getMe(session.user.accessToken);
 
        setPrimeiroNome(userData.primeiroNome || "");
        setUltimoNome(userData.ultimoNome || "");
        setEmail(userData.email || "");
        setCpf(userData.cpf || "");
        setDateNascimento(userData.dataNascimento || "");
        setSexo(userData.sexo || "");
        setCep(userData.cep || "");
        setRua(userData.rua || "");
        setNumero(userData.numero || "");
        setComplemento(userData.complemento || "");
        setMunicipio(userData.municipio || "");
        setEstado(userData.estado || "");
        setBairro(userData.bairro || "");

      } catch (error) {
        toast.error("Erro ao carregar dados do usuário.");
        console.error("Erro ao buscar /usuario/me:", error);
      }
    };

    fetchUserData();
  }, [session]);

  const validarCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  };

  const handleBuscarCEP = async () => {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      toast.warning("CEP inválido.");
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await res.json();

      if (data.erro) {
        toast.error("CEP não encontrado!");
        return;
      }

      

      // Monta o endereço completo para enviar ao backend
      setEndereco(`${data.logradouro}, ${bairro} - ${municipio}/${estado}`);
    } catch {
      toast.error("Erro ao buscar CEP.");
    }
  };

  const handleSubmit = async () => {
    if (!validarCPF(cpf)) {
      toast.error("CPF inválido!");
      return;
    }

    if (!primeiroNome || !ultimoNome || !dateNascimento || !sexo || !cep || !numero) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const dadosAtualizados: IChangeDatasUser = {
      primeiroNome,
      ultimoNome,
      cpf,
      dateNascimento,
      sexo,
      cep,
      rua,
      numero,
      bairro,
      complemento,
      municipio,
      estado,

    };

    const loadingToast = toast.loading("Salvando alterações...");

    try {
      const response = await putChangeDatasUser(
        session?.user.accessToken,
        session?.user.id,
        dadosAtualizados
      );

      if (response?.ok) {
        toast.update(loadingToast, {
          render: "Alterações salvas com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(loadingToast, {
          render: "Erro ao salvar alterações.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch {
      toast.update(loadingToast, {
        render: "Erro de rede ou servidor.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // Máscara de CEP e CPF
  const maskCep = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);

  const maskCpf = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <div className="mb-4">
        <Image
          src={ImageAvatar}
          alt="Avatar do usuário"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        {/* Primeiro Nome e Último Nome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Primeiro Nome</label>
            <input
              type="text"
              value={primeiroNome}
              onChange={(e) => setPrimeiroNome(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Último Nome</label>
            <input
              type="text"
              value={ultimoNome}
              onChange={(e) => setUltimoNome(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />

          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Sexo */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Sexo</label>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro_nao_dizer">Prefiro não dizer</option>
            </select>
          </div>
        </div>


        {/* Data de Nascimento e CPF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
            <input
              type="date"
              value={dateNascimento}
              onChange={(e) => setDateNascimento(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(maskCpf(e.target.value))}
              className="w-full p-2 border rounded"
              placeholder="000.000.000-00"
              required
            />
          </div>
        </div>
        {/* CEP */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CEP</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(maskCep(e.target.value))}
            onBlur={handleBuscarCEP}
            className="w-full p-2 border rounded"
            placeholder="00000-000"
            required
          />
        </div>

        {/* Rua e Número */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Rua</label>
            <input
              type="text"
              value={rua}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Número</label>
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          {/* Complemento */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Complemento</label>
            <input
              type="text"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Município, Estado e Bairro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Município</label>
            <input
              type="text"
              value={municipio}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Estado</label>
            <input
              type="text"
              value={estado}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bairro</label>
            <input
              type="text"
              value={bairro}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>


        <button
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Salvar
        </button>
      </form>

      <ToastContainer position="top-right" />
    </main>
  );
}
