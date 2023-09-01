import styles from "./Card.module.scss";
import {useAppSelector} from "../../hook/useAppSelector";
import {selectElements} from "../../redux/floorSlice";
import {API_URL} from "../../App";
import {IElement} from "../../types/types";

interface ISectionCardProps {
  title?: string
  variant: 'section' | 'element'
  element?: IElement
}

const Card = ({title, variant, element}: ISectionCardProps) => {

  const elements = useAppSelector(state => selectElements(state, title || ''))
  const photoUrl = variant === 'section' ? elements[0]?.photo[0].src : element?.photo[0].src

  return variant === 'section' ?
    <div className={styles.wrapper}>
      <img className={styles.sectionImage} src={API_URL + photoUrl} alt=""/>
      <div>{title}</div>
    </div>
    :
    <div className={styles.wrapper}>
      <img className={styles.sectionImage} src={API_URL + photoUrl} alt=""/>
      <div>{element?.title}</div>
      <div className={styles.elementPrice}>{element?.price} {element?.currency}</div>
    </div>



}

export default Card;