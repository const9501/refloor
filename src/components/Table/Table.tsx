import styles from "./Table.module.scss";
import {Link} from "react-router-dom";
import Card from "../Card/Card";
import {useAppSelector} from "../../hook/useAppSelector";
import {ITableProps} from "../../types/types";



const Table = ({variant, heading, sections, elements}: ITableProps) => {

  const {status} = useAppSelector(state => state)

  return (

    <>
      <h2 className={styles.heading}>{heading}</h2>


      {
        status === 'loading' &&
				<div className={styles.loaderWrapper}><span className={styles.loader}></span>Загрузка...</div>
      }

      {
        status === 'rejected' &&
				<div className={styles.errorMessage}>Что то пошло не так, повторите попытку позже</div>
      }

      <div className={styles.catalogGrid}>
        {

          variant === 'section' ?
            sections && sections.map(section =>
              <Link key={section.id} to={section.title}>
                <Card variant='section' title={section.title}/>
              </Link>
            ) : elements && elements.map(element =>
            <Link key={element.id} to={element.id}>
              <Card variant='element' element={element} title={element.title}/>
            </Link>
          )

        }

      </div>

    </>


  );
}

export default Table;