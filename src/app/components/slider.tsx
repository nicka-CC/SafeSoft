'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ig from "./Untitled.jpg"
import ig1 from "@/app/[public]/PVXG5.png"
import Image from "next/image"
// import "./swiper.css"
export default function Slider(){
    return(
        <div>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true, 
                    pauseOnMouseEnter: true
                  }}
                  pagination={{
                    clickable: true,
                  }}

                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Image src={ig} alt="cc" width={500} height={500}/></SwiperSlide>
                <SwiperSlide><Image src={ig1} alt="cc" width={500} height={500}/></SwiperSlide>
                <SwiperSlide><Image src={ig} alt="cc" width={500} height={500}/></SwiperSlide>
                <SwiperSlide><Image src={ig} alt="cc" width={500} height={500}/></SwiperSlide>
                
            </Swiper>

        </div>
    )
}