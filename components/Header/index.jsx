import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import Logo from "/public/images/logo.svg";
import Button from "../Button";
const Header = () => {
  return(
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Link href="/"><Image src={Logo} alt="Logotipo da Agência" /></Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/">O que fazemos</Link>
          <Link href="/">Cases</Link>
        </ul>
      </div>
      <div className={styles.action}>
        <Button title="Fale conosco" />
      </div>
    </div>
  )
}

export default Header;