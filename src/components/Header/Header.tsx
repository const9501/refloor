import mainLogo from "../../assets/logo.png";
import markerIcon from "../../assets/markerIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useAppSelector} from "../../hook/useAppSelector";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
  const sections = useAppSelector(state => state.data?.sections)

  return (
    <div className={styles.wrapper}>

      <Link to='/'>
        <img src={mainLogo} alt=""/>
      </Link>

      <div
        className={styles.burgerWrapper}
        onClick={() => setBurgerMenuIsOpen(true)}
      >
        <span className={styles.burger}></span>
      </div>

      <div className={styles.dropdownContainer}>

        <span
          className={styles.dropdownTrigger}
          onClick={(event) => setDropdownIsOpen(!dropdownIsOpen)}
        >
          Каталог
        </span>

        <div
          className={dropdownIsOpen ? styles.dropdownMenu + ' ' + styles.dropdownActive : styles.dropdownMenu + ' ' + styles.dropdownInactive}>
          {
            sections && sections.map((section) =>
              <Link
                to={section.title}
                key={section.id}
                onClick={() => setDropdownIsOpen(false)}
                className={styles.dropdownItem}
              >
                {section.title}
              </Link>
            )
          }

        </div>

      </div>

      <div
        onClick={() => setDropdownIsOpen(false)}
        className={dropdownIsOpen ? styles.dropdownMenuBack + ' ' + styles.dropdownMenuBackActive : styles.dropdownMenuBackInactive}
      />


      <div className={styles.container}>
        <img className={styles.icon} src={markerIcon} alt=""/>
        <span className={styles.address}>
          г. Новосибирск, ул. Красноярская, 35
        </span>
      </div>

      <div className={styles.container}>
        <img className={styles.icon} src={phoneIcon} alt=""/>
        <span className={styles.phone}>
          8-800-500-52-20
        </span>
      </div>

      <BurgerMenu active={burgerMenuIsOpen} setActive={setBurgerMenuIsOpen} heading='Каталог' items={sections}/>

    </div>
  );
}

export default Header;