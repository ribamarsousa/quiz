import styles from "../styles/Enunciado.module.css";

interface IProps {
  texto: string;
}

export default function Enunciado(props: IProps) {
  return (
    <div className={styles.enunciado}>
      <span className={styles.texto}>{props.texto}</span>
    </div>
  );
}
