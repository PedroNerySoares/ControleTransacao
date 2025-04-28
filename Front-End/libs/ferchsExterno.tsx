export async function fetchCep(cep:String) {
  
  const response = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`))
  return response.json()
}