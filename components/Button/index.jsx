import styles from "./button.module.scss"

const Button = ({ title, kind }) => {
  const generationClassByKind = () => {
    if(kind === "secondary") return styles.secondary;

    return styles.primary;
  }

  return(
    <button className={`${styles.button} ${generationClassByKind()}`}>{title}</button>
  );
}

export default Button;