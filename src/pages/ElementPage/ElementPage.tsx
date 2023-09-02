import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {selectElement} from "../../redux/floorSlice";
import styles from "./ElementPage.module.scss";
import NavButton from "../../components/NavButton/NavButton";
import backArrowIcon from "../../assets/backArrowIcon.png";
import homeIcon from "../../assets/homeIcon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, {CustomArrowProps} from "react-slick";
import {API_URL} from "../../App";


const NextArrow = ({onClick, className}: CustomArrowProps) => (
  <div
    style={{
      height: "20px",
      width: "20px",
      border: "2px solid black",
      transform: "rotate(-45deg)",
      borderWidth: "0px 2px 2px 0px",
      position: "absolute",
      top: "50%",
      right: "-20px"
    }}
    className={className}
    onClick={onClick}
  />
)

const PrevArrow = ({onClick, className}: CustomArrowProps) => (
  <div
    style={{
      height: "20px",
      width: "20px",
      border: "2px solid black",
      transform: "rotate(135deg)",
      borderWidth: "0px 2px 2px 0px",
      position: "absolute",
      top: "50%",
      right: "-20px"
    }}
    className={className}
    onClick={onClick}
  />
)

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};

const ElementPage = () => {

  const {id} = useParams()
  const navigate = useNavigate()


  const element = useAppSelector(state => selectElement(state, id))

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <div className={styles.wrapper}>

      <div className={styles.buttonContainer}>
        <NavButton img={backArrowIcon} title='Назад' onClick={goBack}/>
        <NavButton img={homeIcon} title='Главная' onClick={goHome}/>
      </div>


      {
        element && <div className={styles.container}>


					<div className={styles.slider}>
						<Slider {...sliderSettings}>
							<img src={API_URL + element.src} alt=""/>
              {
                element.photo.map(photo =>
                  <img key={photo.id} src={API_URL + photo.src} alt=""/>
                )
              }
						</Slider>
					</div>

					<div className={styles.info}>
						<h1 className={styles.title}>{element.title}</h1>
						<div className={styles.price}>
              {element.price} {element.currency}
						</div>
					</div>

				</div>
      }


    </div>
  );
}

export default ElementPage;