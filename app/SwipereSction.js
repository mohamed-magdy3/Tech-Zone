"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// استيراد ستايلات المكتبة
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    { id: 1, title: "أحدث صيحات التكنولوجيا", img: "/img/1.jpg" },
    { id: 2, title: "إكسسوارات أبل الأصلية", img: "/img/9.jpg" },
    { id: 3, title: "إكسسوارات أبل الأصلية", img: "/img/10.jpg" },

  ];

  return (
    <div className="container mx-auto h-[800px] overflow-hidden rounded-3xl my-6">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }} // يقلب كل 3 ثواني
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="w-full relative  h-full flex items-center justify-center bg-gray-900 text-white brightness-125 "
              style={{ 
                backgroundImage: `url(${slide.img})`, 
                backgroundSize: 'container',
                backgroundPosition: 'center' 
              }}
              
            >
              {/* طبقة شفافة عشان الكلام يبان */}
              <div className="absolute inset-0 bg-black/40" />
              <h1 className="relative z-10 text-5xl font-noto font-black">
                {slide.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}