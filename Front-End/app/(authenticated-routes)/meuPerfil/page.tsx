"use client";

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

import { putChangeDatasUser, getDataUser, putChangePassword, PostUploadImg } from "@/libs/fetchsApi";
import { fetchCep } from "@/libs/ferchsExterno";

import { IChangeDatasUser } from "@/app/interfaces/IChangeDatasUser";
import { IChangePassword } from "@/app/interfaces/IChangePassword";

import foto from '@/public/avatar.jpeg';
// Interfaces
interface FormDataState {
  usuario: string;
  perfil: string;
  primeiroNome: string;
  ultimoNome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  email: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  estado: string;
  cep: string;
  municipio: string;
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export default function MeuPerfil() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState<FormDataState>({
    usuario: "",
    perfil: "",
    primeiroNome: "",
    ultimoNome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    email: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    estado: "",
    cep: "",
    municipio: "",
  });

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [cepError, setCepError] = useState(false);

  
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
 
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<string | any>(session?.user.image ?? foto);
  
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

  //   const file = event.target.files?.[0];
  //   if (file) {

  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setAvatar(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);

  //     // Prepara para enviar para o servidor
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('idTeam', "1");

  //     try {
  //       const response = await PostUploadImg(session?.user.accessToken, formData)

  //       if (!response.ok) {
  //         throw new Error('Erro ao fazer upload');
  //       }

  //       console.log('Upload feito com sucesso!');
  //     } catch (error) {
  //       console.error('Erro no upload:', error);
  //     }
  //   }
  // };


 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetCep = async () => {
    if (formData.cep.length !== 8) return;

    const response = await fetchCep(formData.cep);
    if (response?.erro) {
      setCepError(true);
      toast.error("CEP inválido!");
      setFormData(prev => ({ ...prev, rua: "", bairro: "", estado: "", municipio: "" }));
    } else {
      setCepError(false);
      setFormData(prev => ({
        ...prev,
        rua: response.logradouro || "",
        bairro: response.bairro || "",
        estado: response.uf || "",
        municipio: response.localidade || "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validarCPF(formData.cpf)) {
      toast.error("CPF inválido!");
      return;
    }
  
    const dadosAtualizados: IChangeDatasUser = {
      usuario: formData.usuario,
      perfil: formData.perfil,
      primeiroNome: formData.primeiroNome,
      ultimoNome: formData.ultimoNome,
      cpf: formData.cpf.replace(/\D/g, ""),
      dataNascimento: formData.dataNascimento,
      sexo: formData.sexo,
      numero: formData.numero,
      complemento: formData.complemento,
      bairro: formData.bairro,
      estado: formData.estado,
      cep: formData.cep,
      rua: formData.rua,
      municipio: formData.municipio,
    };
  
    try {
      const loadingToast = toast.loading("Salvando alterações...");
  
      // Verifica se o accessToken está disponível
      if (!session?.user.accessToken) {
        throw new Error("Access token não disponível");
      }
  
      const response = await putChangeDatasUser(
        session.user.accessToken,  
        session.user.id,
        dadosAtualizados
      );
  
      toast.update(loadingToast, {
        render: response?.ok ? "Alterações salvas com sucesso!" : "Erro ao salvar alterações.",
        type: response?.ok ? "success" : "error",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Erro de rede ou servidor.");
      console.error(error); // Para depuração, pode ser útil
    }
  };


  const handleChangePassword = async () => {
    if (novaSenha !== confirmacaoSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }
  
    try {
      const loadingToast = toast.loading("Alterando senha...");
  
      // Verifica se o accessToken está disponível
      if (!session?.user.accessToken) {
        throw new Error("Access token não disponível");
      }
      const dadosSenha: IChangePassword = {
        email: formData.email,
        oldPassword: senhaAtual,
        newPassword: novaSenha,
      };
  
      const response = await putChangePassword(
        session.user.accessToken,  
        session.user.id,
        dadosSenha
      );
  
      if (response.ok) {
        toast.update(loadingToast, {
          render: "Senha alterada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setSenhaAtual(""); // Limpa o campo de senha atual após a alteração
      } else {
        toast.update(loadingToast, {
          render: "Erro ao alterar senha.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Erro de rede ou servidor.");
      console.error(error); // Para depuração, pode ser útil
    }
  };
  
  useEffect(() => {
    const carregarDadosUsuario = async () => {
      if (!session?.user?.id || !session?.user?.accessToken) return;

      const response = await getDataUser(session.user.accessToken, session.user.id);
      const dados = await response.json();

      setFormData({
        usuario: dados.usuario || "",
        perfil: dados.authorities?.[0]?.authority || "",
        primeiroNome: dados.primeiroNome || "",
        ultimoNome: dados.ultimoNome || "",
        cpf: dados.cpf || "",
        dataNascimento: dados.dateNascimento || "",
        sexo: dados.sexo || "",
        rua: dados.rua || "",
        email: dados.email || "",
        numero: dados.numero || "",
        complemento: dados.complemento || "",
        bairro: dados.bairro || "",
        estado: dados.estado || "",
        cep: dados.cep || "",
        municipio: dados.municipio || "",
      });
    };

    carregarDadosUsuario();
  }, [session]);

  return (
    <main className="flex flex-col p-6 items-center">
      <div className="flex w-full max-w-5xl gap-8">
        <div className="flex flex-col items-center">
          <div
            onClick={handleAvatarClick}
            className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden cursor-pointer hover:opacity-80"
          >
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                Clique para adicionar
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
           // onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          {/* Formulário Dados Pessoais */}
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
            <h2 className="text-xl font-semibold">Informações Pessoais</h2>

            <div className="grid grid-cols-4 gap-4">
              <InputField label="Usuário" name="usuario" value={formData.usuario} disabled />
              <InputField label="Perfil" name="perfil" value={formData.perfil} disabled />
              <InputField label="Email" name="email" value={formData.email} disabled className="col-span-2" />
              <InputField label="Primeiro Nome" name="primeiroNome" value={formData.primeiroNome} onChange={handleChange} className="col-span-2" required />
              <InputField label="Último Nome" name="ultimoNome" value={formData.ultimoNome} onChange={handleChange} className="col-span-2" required />
              <InputField label="CPF" name="cpf" value={formData.cpf} onChange={(e) => setFormData({ ...formData, })} className="col-span-2" required />

              <InputField label="Data de Nascimento" type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
              <SelectField label="Sexo" name="sexo" value={formData.sexo} onChange={handleChange} required />

              <InputField label="CEP" name="cep" value={formData.cep} onChange={handleChange} onBlur={handleGetCep} error={cepError} className="col-span-3" required />
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" className="text-blue-600 text-sm hover:underline self-center">
                Não sei meu CEP
              </a>

              <InputField label="Rua" name="rua" value={formData.rua} disabled className="col-span-4" />
              <InputField label="Complemento" name="complemento" value={formData.complemento} onChange={handleChange} className="col-span-3" />
              <InputField label="Número" name="numero" value={formData.numero} onChange={handleChange} />

              <InputField label="Bairro" name="bairro" value={formData.bairro} disabled className="col-span-2" />
              <InputField label="Estado" name="estado" value={formData.estado} disabled className="col-span-1" />
              <InputField label="Município" name="municipio" value={formData.municipio} disabled className="col-span-1" />
            </div>

            <button type="submit" className="mt-4 w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Salvar Informações
            </button>
          </form>

          <hr className="my-8 border-gray-300" />

          <form onSubmit={(e) => { e.preventDefault(); handleChangePassword(); }} className="space-y-4">
            <h2 className="text-xl font-semibold">Alterar Senha</h2>

            <InputField label="Senha Atual" type="password" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} />
            <InputField label="Nova Senha" type="password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} />
            <InputField
              label="Confirmação da Nova Senha"
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              error={novaSenha !== confirmacaoSenha}
            />
            {novaSenha !== confirmacaoSenha && (
              <p className="text-red-500 text-sm mt-1">As senhas não coincidem.</p>
            )}

            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Alterar Senha
            </button>
          </form>
        </div>
      </div>
    </main>


  );
}

function InputField({ label, className, error, ...props }: InputFieldProps) {
  return (
    <div className={className || ""}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        {...props}
        className={`w-full p-2 border rounded ${error ? "border-red-500" : "border-gray-300"} ${props.disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
      />
    </div>
  );
}

function SelectField({ label, ...props }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select {...props} className="w-full p-2 border rounded border-gray-300">
        <option value="">Selecione</option>
        <option value="1">Masculino</option>
        <option value="2">Feminino</option>
        <option value="3">Outro</option>
        <option value="4">Prefiro não dizer</option>
      </select>
    </div>
  );
}
