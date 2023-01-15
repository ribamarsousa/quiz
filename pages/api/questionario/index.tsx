import { embaralhar } from "../../../functions/arrays";
import questoes from "../bancoDeQuestoes";

export default function questionario(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: number[]): void; new (): any };
    };
  }
) {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
}
