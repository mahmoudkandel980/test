import React from "react";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

// Array of related suppliers images
const productImages = [
    {
        index: 1,
        name: "max",
        image: "/images/suppliers/max.jpg",
    },
    {
        index: 2,
        name: "nova",
        image: "/images/suppliers/nova.jpg",
    },
    {
        index: 3,
        name: "thomas",
        image: "/images/suppliers/thomas.jpg",
    },
    {
        index: 4,
        name: "aurther",
        image: "/images/suppliers/aurther.jpg",
    },
    {
        index: 5,
        name: "thunder",
        image: "/images/suppliers/thunder.jpg",
    },
    {
        index: 6,
        name: "jone",
        image: "/images/suppliers/jone.jpg",
    },
];

const RelatedSuppliers = () => {
    return (
        <div className='mt-10 border-t-[1px] border-black/40 pt-10'>
            <h2 className='font-semibold text-lg'>Related suppliers</h2>
            <Swiper
                className='tending-swiper'
                breakpoints={{
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                    },
                    640: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1030: {
                        spaceBetween: 15,
                        slidesPerView: 4,
                    },
                    1280: {
                        spaceBetween: 10,
                        slidesPerView: 5,
                    },
                    1536: {
                        spaceBetween: 10,
                        slidesPerView: 6,
                    },
                }}
                navigation
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                grabCursor={true}
                mousewheel={true}
                parallax={true}
                loop={true}
            >
                {productImages.map((productImage) => (
                    <SwiperSlide
                        key={productImage.index}
                        className='flex flex-col justify-center items-center select-none py-10 pb-0'
                    >
                        <img
                            className='bg-cover w-52 rounded-lg'
                            key={productImage.index}
                            src={productImage.image}
                            alt={productImage.name}
                        />
                        <span>{productImage.name}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedSuppliers;
