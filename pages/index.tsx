import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const BASE_URL = "http://localhost:3000/api";

const questaoMock = new QuestaoModel(
  306,
  "Qual bicho transmite a Doença de Chagas?",
  [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Barata"),
    RespostaModel.errada("Pulga"),
    RespostaModel.certa("Barbeiro"),
  ]
);

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    console.log(idsDasQuestoes);
    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    console.log(json);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []); // indica que só vai carregar 1x

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]); // quando mudar os Ids carrega novamente

  function questaoRespondida(questao: QuestaoModel) {}

  function irPraProximoPasso() {}

  return (
    <Questionario
      questao={questao}
      ultimaQuestao={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  );
}
