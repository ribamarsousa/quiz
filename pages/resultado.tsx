import Botao from "../components/Botao";
import styles from "../styles/Resultado.module.css";

export default function Resultado() {
  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}></div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
}
