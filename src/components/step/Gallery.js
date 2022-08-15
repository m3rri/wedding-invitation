/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const mainImgWrapper = css`
    background: rgba(139,165,180,0.07);
    padding: 1rem;
    img {
        width: 100%;
    }
    width: 100%;
    .swiper-wrapper{
        align-items: center;
    }
`;

const swiperWrapper = css`
    width: 100%;
    object-fit: cover;
    margin: 0 0.5rem;
    padding-bottom: 1rem;
    .swiper {
        padding-bottom: 2rem;
    }
    .swiper-pagination-bullet{
        background: rgba(0,0,0,0.25);
    }
    .swiper-pagination-bullet-active{
        background: rgba(200,121,104,0.75);
    }
    .swiper-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal{
        bottom: 0;
    }
`;

const Gallery = ()=>{
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [swiperThumb, setSwiperThumb] = useState({});
    const [swiperMain, setSwiperMain] = useState({});
    const imgLength = 7;
    let thumbSlides = [];
    let mainSlides = [];
    const showImage = (index)=>{
        setSelectedIndex(index);
    }

    for(let i=0; i<imgLength; i++){
        const opacity = selectedIndex===i ? 40 : 100;

        thumbSlides.push(
        <SwiperSlide key={`img${i}`} onClick={()=>showImage(i)}>
            <img
                src={`${process.env.PUBLIC_URL}/gallery/thumb/w${i}.png`}
                width="100%"
                style={{filter: `opacity(${opacity}%)`}}
                alt={`wedding gallery ${i}`}
            />
        </SwiperSlide>
        );

        mainSlides.push(
        <SwiperSlide key={`mainImg${i}`}>
            <img
                src={`${process.env.PUBLIC_URL}/gallery/main/w${i}.png`}
                alt={`wedding gallery selected ${i}`}
            />
        </SwiperSlide>
        )
    }

    return <>
        <div css={{margin: "2rem 0", letterSpacing: "0.2em", "&::before": {content: `'사진첩'`}}}/>
        <div css={swiperWrapper}>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={10}
                grabCursor={true}
                slideToClickedSlide={true}
                pagination={{clickable: true}}
                modules={[Pagination, Controller]}
                onSwiper={setSwiperThumb}
                controller={{control: swiperMain}}
            >
                {thumbSlides}
            </Swiper>
        </div>
        <div css={mainImgWrapper}>
            <Swiper
                className="main-image"
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                modules={[Controller]}
                onSwiper={setSwiperMain}
                controller={{control: swiperThumb}}
                onSlideChange={({activeIndex})=>showImage(activeIndex)}
            >
                {mainSlides}
            </Swiper>
        </div>
    </>;
}

export default Gallery;