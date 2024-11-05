import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { baseUrl } from "../../functions/baseUrl";
import { useFetch } from "../../hooks/useFetch";

export default function MyPartnersSlider() {
    const [currData] = useFetch(`${baseUrl}/parteners`);

    return (
        <div className="myPartener__slider__handler">
            <div className="row myPartener__slider">
                <div className="col-12">
                    <Swiper
                        className='mySwiper'
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1.1,
                                spaceBetween: 10
                            },
                            426: {
                                slidesPerView: 1.8,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 2.2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3.1,
                                spaceBetween: 15
                            },
                            995: {
                                slidesPerView: 4.1,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {
                            currData?.parteners?.map((partiner, index) => (
                                <SwiperSlide key={index} className="partenerSlide__item">
                                    <img src={partiner?.image} alt="logo" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
