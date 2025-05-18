"use client";

import ServiceCard from "../../ui/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Diseño y desarrollo de páginas web responsivas",
    imageUrl: "/services/responsive-design.webp",
    description:
      "Creo sitios web que se adaptan a cualquier dispositivo, asegurando una experiencia de usuario óptima.",
  },
  {
    title: "Desarrollo de interfaces UI/UX modernas",
    imageUrl: "/services/uiux-design.webp",
    description:
      "Diseño interfaces atractivas y funcionales utilizando tecnologías como React, Tailwind y Material UI.",
  },
  {
    title: "Integración de APIs",
    imageUrl: "/services/api-integration.webp",
    description:
      "Conecto aplicaciones web con APIs externas para mejorar su funcionalidad y eficiencia.",
  },
  {
    title: "Creación de aplicaciones SPA",
    imageUrl: "/services/SPA.webp",
    description:
      "Desarrollo aplicaciones de una sola página con Next.js y React, ofreciendo experiencias fluidas y dinámicas.",
  },
  {
    title: "Desarrollo de componentes reutilizables",
    imageUrl: "/services/components.webp",
    description:
      "Construyo componentes modulares y reutilizables que optimizan la escalabilidad y mantenibilidad del código.",
  },
  {
    title: "Desarrollo con TypeScript",
    imageUrl: "/services/TS.webp",
    description:
      "Implemento TypeScript para mejorar la seguridad del código y asegurar una mejor estructura en los proyectos.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-wrap justify-center gap-6 p-10 bg-gray-200 bg-cover bg-center rounded-[50px]"
      style={{ backgroundImage: "url('/Frame.png')" }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
