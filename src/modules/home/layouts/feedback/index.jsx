import { FeedbackWrapper } from './style'
import Carousel from '../../../../assets/images/carousel.png'
import Button from '../../../../components/button'
import { colors } from '../../../../assets/styles/colors'

import Stars from '../../../../assets/icons/stars.svg'
import CarouselImg from '../../../../assets/images/forCarousel1.jpg'
import CarouselImg2 from '../../../../assets/images/forCarousel2.jpg'
import CarouselImg3 from '../../../../assets/images/forCarousel3.jpg'
import CarouselImg4 from '../../../../assets/images/forCarousel4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import './style.css'

SwiperCore.use([EffectCoverflow, Pagination, Navigation])


export default function Feedback() {
    return (
        <FeedbackWrapper className='container'>
            <div className="innerDiv">
                <div className="contentWrap">
                    <p className="integration">TESTIMONIAL</p>
                    <h2 className="toolTitle">What They Say?</h2>
                    <p className="tooltext">Skilline has got more than 100k positive ratings from our users around the world.</p>
                    <p className="tooltext">Some of the students and teachers were greatly helped by the Skilline.</p>
                    <p className="tooltext">Are you too? Please give your assessment</p>
                    <div className="moreFeaturesWrap">
                        <button className="btnWithArrow moreFeatures">
                            Write your assessment
                        </button>
                    </div>
                </div>
                <div className="swiperWrapper">
                    <Swiper grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                        pagination={{ "el": ".swiper-pagination" }}
                        loop={true}
                        navigation={true}
                        className="mySwiper">
                        <SwiperSlide><img src={Carousel} className="carouselImage" />
                            <div className="infoLayer">
                                <p className="feedbackText">"Yordamingiz uchun katta rahmat. Aynan men izlayotgan narsa. Siz pushaymon bo'lmaysiz. Bu haqiqatan ham vaqt va kuchimni tejaydi.".</p>
                                <div className="infoBottom">
                                    <p className="authorFeedback">Ahad Qayum</p>
                                    <div className="reviewWrapper">
                                        <img src={Stars} alt="stars" className="reviewImg" />
                                        <p className="reviewCount">1290 reviews at Yelp</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={CarouselImg} /><div className="infoLayer">
                            <p className="feedbackText">"Yordamingiz uchun katta rahmat. Aynan men izlayotgan narsa. Siz pushaymon bo'lmaysiz. Bu haqiqatan ham vaqt va kuchimni tejaydi.".</p>
                            <div className="infoBottom">
                                <p className="authorFeedback">Will Smith</p>
                                <div className="reviewWrapper">
                                    <img src={Stars} alt="stars" className="reviewImg" />
                                    <p className="reviewCount">79 reviews at Yelp</p>
                                </div>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><img src={CarouselImg2} /><div className="infoLayer">
                            <p className="feedbackText">"Yordamingiz uchun katta rahmat. Aynan men izlayotgan narsa. Siz pushaymon bo'lmaysiz. Bu haqiqatan ham vaqt va kuchimni tejaydi.".</p>
                            <div className="infoBottom">
                                <p className="authorFeedback">Michael Jordan</p>
                                <div className="reviewWrapper">
                                    <img src={Stars} alt="stars" className="reviewImg" />
                                    <p className="reviewCount">85 reviews at Yelp</p>
                                </div>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><img src={CarouselImg3} /><div className="infoLayer">
                            <p className="feedbackText">"Yordamingiz uchun katta rahmat. Aynan men izlayotgan narsa. Siz pushaymon bo'lmaysiz. Bu haqiqatan ham vaqt va kuchimni tejaydi.".</p>
                            <div className="infoBottom">
                                <p className="authorFeedback">John Doe</p>
                                <div className="reviewWrapper">
                                    <img src={Stars} alt="stars" className="reviewImg" />
                                    <p className="reviewCount">63 reviews at Yelp</p>
                                </div>

                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><img src={CarouselImg4} /><div className="infoLayer">
                            <p className="feedbackText">"Yordamingiz uchun katta rahmat. Aynan men izlayotgan narsa. Siz pushaymon bo'lmaysiz. Bu haqiqatan ham vaqt va kuchimni tejaydi.".</p>
                            <div className="infoBottom">
                                <p className="authorFeedback">Tomas Edison</p>
                                <div className="reviewWrapper">
                                    <img src={Stars} alt="stars" className="reviewImg" />
                                    <p className="reviewCount">129 reviews at Yelp</p>
                                </div>

                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </FeedbackWrapper>
    )
}