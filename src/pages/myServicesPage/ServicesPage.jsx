import styles from './servicesPage.module.css'
import sliderImg1 from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg'
import MyHomeSlider from '../../components/myHomeSliderSec/MyHomeSlider'
export default function ServicesPage() {
    return (
        <div className={`${styles.ServicesPage__hadndler}`}>
            <MyHomeSlider heading={'Our Services'} title={''} overLayColor={'#00000057'} showBtn={false} sliderImg1={sliderImg1} sliderImg2={sliderImg1} />
        </div>
    )
}
