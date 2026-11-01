import type { CepResponse } from "@/app/types/external/cep";

export async function getInfoEndereco(cep: string) {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    throw new Error("Informe um CEP válido com 8 dígitos.");
  }

  const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

  if (!response.ok) {
    throw new Error("Não foi possível consultar o CEP.");
  }

  const endereco: CepResponse & { erro?: boolean } = await response.json();
  if (endereco.erro) {
    throw new Error("CEP não encontrado.");
  }

  return endereco;
}
