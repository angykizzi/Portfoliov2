"use client";

import ServiceCard from "../../ui/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { services } from "@/app/[locale]/data/services";

export type Service = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function About() {
  const t = useTranslations("Services");

  return (
    <section
      id="service"
      className="pt-12 h-auto flex flex-wrap justify-center items-center gap-6 px-4 md:px-10 bg-gray-200 bg-cover bg-center rounded-[50px]"
      style={{ backgroundImage: "url('/Frame.png')" }}
    >
      <div className="w-full flex flex-col lg:flex-row px-2 lg:px-14 pb-4 lg:pb-8">
        <h2 className="w-full lg:w-2/4 text-3xl md:text-4xl font-bold text-white flex items-center">{t("title")}</h2>
        <p className="w-full lg:w-2/4 mt-4 text-base md:text-lg text-white flex items-center">
          {t("description")}
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              key={service.id}
              title={t("title")}
              description={t("description")}
              imageUrl={service.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
