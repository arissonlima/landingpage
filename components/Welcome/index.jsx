import Button from "../Button";

import styles from "./welcome.module.scss";

const Welcome = () => {
  return(
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
        <Button title="Aumentar vendas" kind="secondary" />
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default Welcome;