import QuestaoModel from "../model/questao";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";

interface IProps {
  questao: QuestaoModel;
  ultimaQuestao: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario(props: IProps) {
  const questao = props.questao;

  function respostaFornecida(indice: number) {
    if (questao.naoRespondida) {
      props.questaoRespondida(questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {questao ? (
        <Questao
          valor={questao}
          tempoPraResposta={10}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraProximoPasso}
        />
      ) : (
        false
      )}
      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultimaQuestao ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
