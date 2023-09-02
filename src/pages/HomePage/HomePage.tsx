import styles from "./HomePage.module.scss";
import {useAppSelector} from "../../hook/useAppSelector";
import Table from "../../components/Table/Table";


const HomePage = () => {

  const sections = useAppSelector(state => state.data?.sections)

  return (
    <div>

      <div className={styles.textBlock}>
        <h1 className={styles.mainHeading}>Группа компаний «Refloor»</h1>

        <p className={styles.text}>
          Один из крупнейших поставщиков напольных покрытий от ведущих отечественных и зарубежных производителей.
          Сотрудничать с нами легко и приятно. Всегда рады новым партнерам!
        </p>
      </div>

      <div className={styles.catalogWrapper}>

        <Table heading='Каталог покрытий' variant='section' sections={sections}/>

      </div>


    </div>
  );
}

export default HomePage;