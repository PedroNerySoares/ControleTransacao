export type UsuarioDetails = {
  usuario: string;
  email: string;
  primeiroNome: string;
  ultimoNome: string;
  cpf: string;
  dataNascimento: string | null;
  sexo: string;
  cep: string;
  bairro: string;
  complemento: string;
  estado: string;
  rua: string;
  numero: string;
  municipio: string;
};
export type Usuario = {
  id: number;
  usuario: string;
  perfil: string;
  email: string,
  photoPerfil?: string
  roles: Roles[]
};

export type UsuarioImportacao = {
  id: number;
  usuario: string;
  email: string;
  photoPerfil: string;
  roles: string[] | null;
};

// 
type Roles = {
  id: number,
  nome: string
}
