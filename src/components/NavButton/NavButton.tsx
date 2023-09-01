import styles from "./NavButton.module.scss";

interface INavButton {
  title: string
  img: string
  onClick: () => void
}

const NavButton = ({title, img, onClick}: INavButton) => {

  return (
    <button className={styles.button} onClick={onClick}>
      <img src={img} alt=""/>
      <span>
        {title}
      </span>
    </button>
  );
}

export default NavButton;