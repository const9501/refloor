import Header from "../Header/Header";
import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";



const Layout = () => {
  return (
    <div className={styles.wrapper}>

      <header className={styles.container}>
        <Header/>
      </header>

      <main className={styles.container}>
        <Outlet/>
      </main>

    </div>
  );
}

export default Layout;