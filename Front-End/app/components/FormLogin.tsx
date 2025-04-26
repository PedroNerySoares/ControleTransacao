"use client"


import { PostResetPassword } from "@/libs/fetchsApi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";


export default function FormLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errou, setErrou] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");
  const [tentativas, setTentativas] = useState(0);

  function handleExcessoTentativas() {

    console.warn("Usuário excedeu o número de tentativas de login.");
  }



  async function handleForgetPassword() {
    if (!email) {
      alert("Digite seu email");
      return;
    }

    const toastId = toast.loading("Enviando email ")
    const response = await PostResetPassword(email);
    if (response.ok) {
      toast.update(toastId, {
        type: "success",
        autoClose: 3000,
        isLoading: false,
        render: "Email enviado com sucesso"
      })
    } else {
      toast.update(toastId, {
        type: "error",
        autoClose: 3000,
        isLoading: false,
        render: "Ocorreu um erro inesperado! Favor entrar em contato"
      })
    }


  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setMensagemErro("");
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (response?.error) {
      console.log(response?.error);
      const novasTentativas = tentativas + 1;
      setTentativas(novasTentativas);
      setErrou(true);
      setMensagemErro("Erro ao tentar login.");

      if (novasTentativas >= 3) {
        handleExcessoTentativas();
      }
      return;
    }

    router.replace("/importacao");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:shadow-outline text-sm"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:shadow-outline"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={`mt-1 ${errou ? '' : 'hidden'} text-sm text-red-600`}>
          {mensagemErro}.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Entrar
        </button>
        <a
          href="#"
          className="text-gray-600 mt-2 md:mt-0 text-sm hover:underline"
          onClick={handleForgetPassword}
        >
          Esqueci a minha senha
        </a>
      </div>









    </form>


  );
}
