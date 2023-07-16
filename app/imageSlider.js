import React from "react";
import Image from 'next/image'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = ({item})=> {
    const [data, setData] = useState(item)
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
        >
            {
                data.map((x, index)=>(
                    <SwiperSlide><Image src={'http://localhost:5000'+x} width={400} height={400} alt='Product image'/></SwiperSlide>
                ))
            }
        </Swiper>
    )
}


const ImageSlider = ({src}) => {
    return(
        <div>
            <Slider item={src}/>
        </div>)
};

export default ImageSlider;