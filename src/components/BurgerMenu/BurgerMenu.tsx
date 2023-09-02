import styles from "./BurgerMenu.module.scss";
import {Link} from "react-router-dom";
import {ISection} from "../../types/types";
import markerIconBlack from "../../assets/markerIconBlack.png";
import phoneIconBlack from "../../assets/phoneIconBlack.png";

interface IBurgerMenu {
  heading: string
  items: ISection[] | undefined
  active: boolean
  setActive: (active: boolean) => void
}

const BurgerMenu = ({heading, items, active, setActive}: IBurgerMenu) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? styles.menu + ' ' + styles.burgerMenuActive : styles.menu}
    >
      <div className={styles.blur}>

        <div className={styles.menuContent} onClick={event => event.stopPropagation()}>

          <div className={styles.navSection}>
            <div className={styles.closeButtonWrapper} onClick={() => setActive(false)}><span
              className={styles.closeButton}></span></div>

            <div className={styles.heading}>{heading}</div>


            {
              items && items.map(item =>
                <Link className={styles.link} onClick={() => setActive(false)} to={item.title} key={item.id}>
                  <div>{item.title}</div>
                </Link>
              )
            }
          </div>

          <div className={styles.bottomSection}>

            <div className={styles.container}>
              <img className={styles.icon} src={markerIconBlack} alt=""/>
              <span className={styles.address}>г. Новосибирск, ул. Красноярская, 35</span>
            </div>

            <div className={styles.container}>
              <img className={styles.icon} src={phoneIconBlack} alt=""/>
              <span className={styles.phone}>8-800-500-52-20</span>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
}

export default BurgerMenu;