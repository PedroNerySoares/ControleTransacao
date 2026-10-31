export type Importacao = { id: string; importadoEm: string; dataTransacao: string; importadoPor: string; total: number };
export type Transacao = {
  bancoOrigem: string; agenciaOrigem: string; contaOrigem: string;
  bancoDestino: string; agenciaDestino: string; contaDestino: string;
  valor: number;
};

export type ContaSuspeita = { banco: string; agencia: string; conta?: string; valor: number; tipo: "Entrada" | "Saída" };

export const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const importacoes: Importacao[] = [
  { id: "1", importadoEm: "12/10/2025 16:22:41", dataTransacao: "12/10/2025", importadoPor: "ANA", total: 42 },
  { id: "2", importadoEm: "12/10/2025 16:31:29", dataTransacao: "12/10/2025", importadoPor: "JOSE", total: 38 },
  { id: "3", importadoEm: "12/10/2025 17:00:21", dataTransacao: "12/10/2025", importadoPor: "MARCIA", total: 51 },
  { id: "4", importadoEm: "13/10/2025 09:21:49", dataTransacao: "01/01/2022", importadoPor: "SOKOVIA", total: 9 },
  { id: "5", importadoEm: "13/10/2025 10:03:17", dataTransacao: "27/04/1998", importadoPor: "MAYARA", total: 17 },
  { id: "6", importadoEm: "13/10/2025 10:14:32", dataTransacao: "04/01/2025", importadoPor: "ANA", total: 24 },
  { id: "7", importadoEm: "15/10/2025 22:11:06", dataTransacao: "12/10/2025", importadoPor: "JOSE", total: 33 },
  { id: "8", importadoEm: "15/10/2025 22:29:57", dataTransacao: "20/10/2050", importadoPor: "SOKOVIA", total: 12 },
  { id: "9", importadoEm: "15/10/2025 22:31:57", dataTransacao: "20/10/2050", importadoPor: "SOKOVIA", total: 10 },
];

export const transacoes: Transacao[] = [
  { bancoOrigem: "BANCO BRADESCO", agenciaOrigem: "002", contaOrigem: "00005-1", bancoDestino: "CAIXA ECONOMICA FEDERAL", agenciaDestino: "002", contaDestino: "00001-1", valor: 4179 },
  { bancoOrigem: "BANCO BRADESCO", agenciaOrigem: "002", contaOrigem: "00004-1", bancoDestino: "CAIXA ECONOMICA FEDERAL", agenciaDestino: "004", contaDestino: "00005-1", valor: 3656 },
  { bancoOrigem: "BANCO DO BRASIL", agenciaOrigem: "005", contaOrigem: "00004-1", bancoDestino: "BANCO DO BRASIL", agenciaDestino: "005", contaDestino: "00003-1", valor: 19684.88 },
  { bancoOrigem: "BANCO SANTANDER", agenciaOrigem: "004", contaOrigem: "00004-1", bancoDestino: "BANCO DO BRASIL", agenciaDestino: "001", contaDestino: "00004-1", valor: 4438.9 },
  { bancoOrigem: "BANCO DO BRASIL", agenciaOrigem: "004", contaOrigem: "00002-1", bancoDestino: "CAIXA ECONOMICA FEDERAL", agenciaDestino: "005", contaDestino: "00003-1", valor: 3743.8 },
  { bancoOrigem: "BANCO SANTANDER", agenciaOrigem: "001", contaOrigem: "00005-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "004", contaDestino: "00004-1", valor: 603.59 },
  { bancoOrigem: "CAIXA ECONOMICA FEDERAL", agenciaOrigem: "004", contaOrigem: "00001-1", bancoDestino: "BANCO ITAU", agenciaDestino: "004", contaDestino: "00001-1", valor: 4536.4 },
  { bancoOrigem: "BANCO BRADESCO", agenciaOrigem: "003", contaOrigem: "00002-1", bancoDestino: "CAIXA ECONOMICA FEDERAL", agenciaDestino: "004", contaDestino: "00005-1", valor: 2438.86 },
  { bancoOrigem: "BANCO SANTANDER", agenciaOrigem: "003", contaOrigem: "00003-1", bancoDestino: "BANCO DO BRASIL", agenciaDestino: "001", contaDestino: "00004-1", valor: 3383.77 },
];

export const transacoesSuspeitas: Transacao[] = [
  { bancoOrigem: "BANCO DO BRASIL", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 8000 },
  { bancoOrigem: "BANCO SANTANDER", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 210 },
  { bancoOrigem: "BANCO SANTANDER", agenciaOrigem: "001", contaOrigem: "00002-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 79800.22 },
  { bancoOrigem: "BANCO BANRISUL", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 100 },
  { bancoOrigem: "BANCO ITAU", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 19000.5 },
  { bancoOrigem: "BANCO ITAU", agenciaOrigem: "001", contaOrigem: "00002-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 1000 },
  { bancoOrigem: "NUBANK", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 2000 },
  { bancoOrigem: "BANCO INTER", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 300 },
  { bancoOrigem: "CAIXA ECONOMICA FEDERAL", agenciaOrigem: "001", contaOrigem: "00001-1", bancoDestino: "BANCO BRADESCO", agenciaDestino: "001", contaDestino: "00001-1", valor: 900 },
];

export const contasSuspeitas: ContaSuspeita[] = [
  { banco: "BANCO BRADESCO", agencia: "001", conta: "00001-1", valor: 111310.72, tipo: "Entrada" },
  { banco: "BANCO SANTANDER", agencia: "001", conta: "00002-1", valor: 79800.22, tipo: "Saída" },
  { banco: "BANCO ITAU", agencia: "001", conta: "00001-1", valor: 19000.5, tipo: "Saída" },
  { banco: "BANCO DO BRASIL", agencia: "001", conta: "00001-1", valor: 8000, tipo: "Saída" },
  { banco: "NUBANK", agencia: "001", conta: "00001-1", valor: 2000, tipo: "Saída" },
];

export const agenciasSuspeitas: ContaSuspeita[] = [
  { banco: "BANCO BRADESCO", agencia: "001", valor: 111310.72, tipo: "Entrada" },
  { banco: "BANCO SANTANDER", agencia: "001", valor: 80010.22, tipo: "Saída" },
  { banco: "BANCO ITAU", agencia: "001", valor: 20000.5, tipo: "Saída" },
  { banco: "BANCO DO BRASIL", agencia: "001", valor: 8000, tipo: "Saída" },
];

export const competencias = ["Outubro/2025", "Janeiro/2022", "Abril/1998", "Janeiro/2025", "Outubro/2050"];

export const usuarios: Usuario[] = [
  { id: 1, usuario: "Ana", perfil: "Administrador", email: "ana@gmail.com" },
  { id: 2, usuario: "José", perfil: "Administrador", email: "jose@gmail.com" },
  { id: 3, usuario: "Márcia", perfil: "Analista", email: "marcia@gmail.com" },
  { id: 4, usuario: "Mayara", perfil: "Analista", email: "mayara@gmail.com" },
  { id: 5, usuario: "Sokovia", perfil: "Administrador", email: "pedrohnery@gmail.com" },
  { id: 6, usuario: "Teste", perfil: "Leitor", email: "testr@gmail.com" },
];

export const volumeMensal = [
  { mes: "Mai", total: 182000, suspeito: 12000 },
  { mes: "Jun", total: 214000, suspeito: 18500 },
  { mes: "Jul", total: 198000, suspeito: 9800 },
  { mes: "Ago", total: 256000, suspeito: 31200 },
  { mes: "Set", total: 241000, suspeito: 22400 },
  { mes: "Out", total: 312000, suspeito: 111310 },
  { mes: "Nov", total: 312000, suspeito: 111310 },
  { mes: "Dez", total: 312000, suspeito: 111310 },
];
