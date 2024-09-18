import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

import Logo from "/public/images/logo.svg";
const Header = () => {
  return(
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Link href="/"><Image src={Logo} /></Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/">O que fazemos</Link>
          <Link href="/">Cases</Link>
        </ul>
      </div>
      <div className={styles.action}>
        <button className={styles.button}>Fale conosco</button>
      </div>
    </div>
  )
}

export default Header;