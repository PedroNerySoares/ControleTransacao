export async function getArquivo(cep: string) {
  const cepLimpo = cep.replace(/\D/g, "");
  const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  const data = await response.json();


  if (!response.ok) {
    throw new Error("Network -response was not ok");
  }
  return await response.json();
}
