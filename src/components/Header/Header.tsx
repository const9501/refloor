import mainLogo from "../../assets/logo.png";
import markerIcon from "../../assets/markerIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useAppSelector} from "../../hook/useAppSelector";

const Header = () => {

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const sections = useAppSelector(state => state.data?.sections)


  return (
    <div className={styles.wrapper}>

      <Link to='/'>
        <img src={mainLogo} alt=""/>
      </Link>

      <div className={styles.dropdownContainer}>

        <span className={styles.dropdownTrigger} onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
          Каталог
        </span>

        <div className={dropdownIsOpen ? styles.dropdownMenu + ' ' + styles.dropdownActive : styles.dropdownMenu + ' ' + styles.dropdownInactive}>
          {
            sections && sections.map((section) =>
              <Link to={section.title} key={section.id} onClick={() => setDropdownIsOpen(!dropdownIsOpen)} className={styles.dropdownItem}>{section.title}</Link>
            )
          }

        </div>

      </div>

      <div className={styles.container}>
        <img className={styles.icon} src={markerIcon} alt=""/>
        <span>
          г. Новосибирск, ул. Красноярская, 35
        </span>
      </div>

      <div className={styles.container}>
        <img className={styles.icon} src={phoneIcon} alt=""/>
        <span>
          8-800-500-52-20
        </span>
      </div>

    </div>
  );
}

export default Header;