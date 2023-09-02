import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {selectElements} from "../../redux/floorSlice";
import styles from "./SectionPage.module.scss";
import Table from "../../components/Table/Table";
import NavButton from "../../components/NavButton/NavButton";
import backArrowIcon from "../../assets/backArrowIcon.png";
import homeIcon from "../../assets/homeIcon.png";


const SectionPage = () => {

  const {section} = useParams()
  const navigate = useNavigate()

  const elements = useAppSelector(state => selectElements(state, section))
  const {status} = useAppSelector(state => state)

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (

    <div className={styles.wrapper}>

      <div className={styles.buttonContainer}>
        <NavButton img={backArrowIcon} title='Назад' onClick={goBack}/>
        <NavButton img={homeIcon} title='Главная' onClick={goHome}/>
      </div>



      <div className={styles.container}>


        {/*// @ts-ignore*/}
        <Table heading={section} variant='element' elements={elements}/>

        {
          status === 'fulfilled' && !elements.length &&
					<div className={styles.errorMessage}>Товары не найдены</div>
        }
      </div>

    </div>

  );
}

export default SectionPage;