import React from "react";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

// Array of other product for the same supplier
const productImages = [
    {
        index: 1,
        name: "realme 9 Pro + 5G Smartphone",
        image: "/images/others/realme 9 Pro + 5G Smartphone.jpg",
    },
    {
        index: 2,
        name: "Samsung Galaxy A54 5G, Graphite",
        image: "/images/others/Samsung Galaxy A54 5G, Graphite.jpg",
    },
    {
        index: 3,
        name: "OPPO A57 - Smartphone 64GB, 4GB RAM, Dual Sim, Black",
        image: "/images/others/OPPO A57 - Smartphone 64GB, 4GB RAM, Dual Sim, Black.jpg",
    },
    {
        index: 4,
        name: "OPPO Reno8 Lite 5G Smartphone",
        image: "/images/others/OPPO Reno8 Lite 5G Smartphone.jpg",
    },
    {
        index: 5,
        name: "Huawei P30 Lite 128 GB 6.15 inch FHD",
        image: "/images/others/Huawei P30 Lite 128 GB 6.15 inch FHD.jpg",
    },
    {
        index: 6,
        name: "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
        image: "/images/others/Apple iPhone 14 Pro Max (256 GB) - Deep Purple.jpg",
    },
];

const OthersProducts = () => {
    return (
        <div className='mt-10 border-t-[1px] border-black/40 pt-10'>
            <h2 className='font-semibold text-lg'>
                Others products for the same supplier
            </h2>
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
                    delay: 2500,
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
                            className='bg-cover w-52'
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

export default OthersProducts;
