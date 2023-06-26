import { IServico } from "./servico"

export interface IFuncionario{
  id: number
  foto: string
  nome: string
  especialidade: string
  servicos: Array <IServico>
}
