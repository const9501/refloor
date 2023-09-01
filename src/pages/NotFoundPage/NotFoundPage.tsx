import styles from "./NotFoundPage.module.scss";
import {Link} from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <div>К сожалению, такой страницы не существует</div>
      <Link to='/'>На главную</Link>

    </div>
  );
}

export default NotFoundPage;