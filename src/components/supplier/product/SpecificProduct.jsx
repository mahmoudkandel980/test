import React, { useState } from "react";

// Array of product images for the specific product
const productImages = [
    {
        index: 1,
        name: "Apple iPhone 14 (128 GB) - Midnight",
        image: "/images/iphone/black.jpg",
    },
    {
        index: 2,
        name: "Apple iPhone 14 (128 GB) - Blue",
        image: "/images/iphone/blue.jpg",
    },
    {
        index: 3,
        name: "Apple iPhone 14 (128 GB) - RED",
        image: "/images/iphone/red.jpg",
    },
    {
        index: 4,
        name: "Apple iPhone 14 (128 GB) - Purple",
        image: "/images/iphone/purple.jpg",
    },
    {
        index: 5,
        name: "Apple iPhone 14 (128 GB) - Starlight",
        image: "/images/iphone/white.jpg",
    },
    {
        index: 6,
        name: "Apple iPhone 14 (128 GB) - Yellow",
        image: "/images/iphone/yellow.jpg",
    },
];

const SpecificProduct = () => {
    // state for handle the current chosen product image
    const [currentProductImage, setCurrentProductImage] = useState(
        productImages[0]
    );

    // toggle the current selected product image
    const changeCurrentProductImageHandler = (productImage) => {
        setCurrentProductImage(productImage);
    };

    return (
        <div className='grid lg:grid-cols-2 justify-start items-center gap-3'>
            <div className='flex flex-col lg:flex-row lg:justify-center items-center sm:gap-5 gap-2'>
                <div className='flex lg:flex-col gap-3 sm:gap-5 content-start order-1'>
                    {productImages.map((productImage) => (
                        <img
                            onClick={changeCurrentProductImageHandler.bind(
                                this,
                                productImage
                            )}
                            className={`${
                                currentProductImage.index ===
                                    productImage.index &&
                                "border-[1px] p-1 rounded-sm"
                            } w-10 bg-cover cursor-pointer duration-150`}
                            key={productImage.index}
                            src={productImage.image}
                            alt={productImage.name}
                        />
                    ))}
                </div>
                <div className='lg:order-2'>
                    <img
                        className='h-96 lg:h-[600px]'
                        src={currentProductImage.image}
                        alt={currentProductImage.name}
                    />
                </div>
            </div>
            <div className='flex flex-col self-start gap-5 flex-1'>
                <h3 className='text-lg border-b-[1px] border-black w-fit'>
                    {currentProductImage.name}
                </h3>
                <p className='text-xs sm:text-sm flex-wrap opacity-70'>
                    6.1-inch Super Retina XDR display All-day battery life and
                    up to 20 hours of video playback Industry-leading durability
                    features with Ceramic Shield and water resistance A15 Bionic
                    chip with 5-core GPU for lightning-fast performance.
                    Superfast 5G cellular Advanced camera system for better
                    photos in any light Action mode for smooth, steady handheld
                    videos Cinematic mode now in 4K Dolby Vision up to 30 fps
                    Vital safety features — Emergency SOS via satellite and
                    Crash Detection iOS 16 offers even more ways to personalise,
                    communicate and share
                </p>
                <video controls className='w-96 rounded-md mt-5'>
                    <source src='/videos/iPhone14.mp4' type='video/mp4' />
                    Download the
                    <a href='/media/cc0-videos/flower.webm'>WEBM</a>
                    or
                    <a href='/media/cc0-videos/flower.mp4'>MP4</a>
                    video.
                </video>
            </div>
        </div>
    );
};

export default SpecificProduct;
