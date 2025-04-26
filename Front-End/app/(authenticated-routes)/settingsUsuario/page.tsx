"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import { putChangeDatasUser, getDataUser, putChangePassword } from "@/libs/fetchsApi";
import { IChangeDatasUser } from "@/app/interfaces/IChangeDatasUser";
import ImageAvatar from "../../../public/avatar.jpeg";
import { IChangePassword } from "@/app/interfaces/IChangePassword";

export default function SettingsUsuario() {
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [perfil, setPerfil] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [email, setEmail] = useState("usuario@email.com");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [endereco, setEndereco] = useState("");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

  const { data: session } = useSession();

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
  const formatarCPF = (valor: string) => {
    const cpfNumerico = valor.replace(/\D/g, "");
    return cpfNumerico
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };
  const removerMascaraCPF = (valor: string) => {
    return valor.replace(/\D/g, "");
  };


  const handleSubmit = async () => {
    if (!validarCPF(cpf)) {
      toast.error("CPF inválido!");
      return;
    }

    if (!primeiroNome || !ultimoNome || !dataNascimento || !sexo || !endereco) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const dadosAtualizados: IChangeDatasUser = {
      usuario,
      perfil,
      primeiroNome,
      ultimoNome,
      cpf: removerMascaraCPF(cpf),
      dataNascimento,
      sexo,
      endereco,
    };

    try {
      const loadingToast = toast.loading("Salvando alterações...");
      const response = await putChangeDatasUser(session?.user.accessToken, session?.user.id, dadosAtualizados);

      toast.update(loadingToast, {
        render: response?.ok ? "Alterações salvas com sucesso!" : "Erro ao salvar alterações.",
        type: response?.ok ? "success" : "error",
        isLoading: false,
        autoClose: 3000,
      });
    } catch {
      toast.error("Erro de rede ou servidor.");
    }
  };

  const handleChangePassword = async () => {
    if (novaSenha !== confirmacaoSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    const dadosSenha: IChangePassword = {
      email,
      oldPassword: senhaAtual,
      newPassword: novaSenha,
    };

    const loadingToast = toast.loading("Alterando senha...");

    const response = await putChangePassword(session?.user.accessToken, session?.user.id, dadosSenha);

    if (response.ok) {
      setNovaSenha("")
      setSenhaAtual("")
      setConfirmacaoSenha("")
      toast.update(loadingToast, {
        render: "Senha alterada com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {

      const errorData = await response.json();
      toast.update(loadingToast, {
        render: errorData.message || "Erro inesperado! Favor contactar suporte.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

    }
  };

  useEffect(() => {
    const carregarDadosUsuario = async () => {
      if (!session?.user?.id || !session?.user?.accessToken) return;
      const response = await getDataUser(session.user.accessToken, session.user.id);
      const dados = await response.json();

      setUsuario(dados.usuario || "");
      setPerfil(dados.authorities?.[0]?.authority || "");
      setPrimeiroNome(dados.primeiroNome || "");
      setUltimoNome(dados.ultimoNome || "");
      setCpf(dados.cpf || "");
      setDataNascimento(dados.dateNascimento || ""); // formato yyyy-MM-dd
      setSexo(dados.sexo || "");
      setEndereco(dados.endereco || "");
      setEmail(dados.email || "");
    };

    carregarDadosUsuario();
  }, [session]);

  return (
    <main className="flex flex-col p-6 items-center">
      <div className="flex w-full max-w-5xl gap-8">
        <div className="flex flex-col items-center">
          <Image src={ImageAvatar} alt="Avatar do usuário" width={150} height={150} className="rounded-full" />
        </div>

        <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
            <h2 className="text-xl font-semibold">Informações Pessoais</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Usuário</label>
                <input type="text" value={usuario} disabled className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Perfil</label>
                <input type="text" value={perfil} disabled className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" value={email} disabled className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Primeiro Nome</label>
                <input type="text" value={primeiroNome} onChange={(e) => setPrimeiroNome(e.target.value)} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Último Nome</label>
                <input type="text" value={ultimoNome} onChange={(e) => setUltimoNome(e.target.value)} className="w-full p-2 border rounded" required />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">CPF</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(formatarCPF(e.target.value))} className="w-full p-2 border rounded" placeholder="000.000.000-00" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
                <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sexo</label>
                <select value={sexo} onChange={(e) => setSexo(e.target.value)} className="w-full p-2 border rounded" required>
                  <option value="">Selecione</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                  <option value="3">Outro</option>
                  <option value="4">Prefiro não dizer</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Endereço</label>
                <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full p-2 border rounded" required />
              </div>
            </div>

            <button type="submit" className="mt-4 w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Salvar Informações
            </button>
          </form>

          <hr className="my-8 border-gray-300" />

          <form onSubmit={(e) => { e.preventDefault(); handleChangePassword(); }} className="space-y-4">
            <h2 className="text-xl font-semibold">Alterar Senha</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Senha Atual</label>
              <input type="password" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nova Senha</label>
              <input type="password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirmação da Nova Senha</label>
              <input
                type="password"
                value={confirmacaoSenha}
                onChange={(e) => setConfirmacaoSenha(e.target.value)}
                className={`w-full p-2 border rounded ${novaSenha !== confirmacaoSenha ? 'border-red-500' : ''}`}
              />
              {novaSenha !== confirmacaoSenha && (
                <p className="text-red-500 text-sm mt-1">As senhas não coincidem.</p>
              )}
            </div>

            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Alterar Senha
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </main>
  );
}
