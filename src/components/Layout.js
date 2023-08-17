import Logo from "../images/Logo.png";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={Logo} alt="Todo" />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
