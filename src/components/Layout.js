/* import { useTaskContext } from "../context/providers/TodoContextProvider";
import Logo from "../images/Logo.png";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { error } = useTaskContext();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={Logo} alt="Todo" />
        {error && <p className={styles.errorText}>{error}</p>}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
 */