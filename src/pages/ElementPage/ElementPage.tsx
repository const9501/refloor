import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {selectElement} from "../../redux/floorSlice";
import styles from "./ElementPage.module.scss";
import NavButton from "../../components/NavButton/NavButton";
import backArrowIcon from "../../assets/backArrowIcon.png";
import homeIcon from "../../assets/homeIcon.png";
import Table from "../../components/Table/Table";

const ElementPage = () => {

  const params = useParams()
  const navigate = useNavigate()


  const elementTitle = params.element
  const element = useAppSelector(state => selectElement(state, elementTitle))

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <div className={styles.wrapper}>

      <div className={styles.buttonContainer}>
        <NavButton img={backArrowIcon} title='Назад' onClick={goBack}/>
        <NavButton img={homeIcon} title='Главная' onClick={goHome}/>
      </div>



      <div className={styles.container}>



      </div>

    </div>
  );
}

export default ElementPage;