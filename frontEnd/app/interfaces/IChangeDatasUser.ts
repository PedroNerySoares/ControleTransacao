export interface IChangeDatasUser {
   
  primeiroNome?: string;
  ultimoNome?: string;
  cpf?: string;
  dateNascimento?: string; // formato ISO (yyyy-MM-dd)
  sexo?: string; // pode ser 'M', 'F' ou outro valor configurado
  cep?: string;
  bairro?: string;
  complemento?: string;
  estado?: string;
  rua?: string;
  numero?: string;
  municipio?: string;
}
