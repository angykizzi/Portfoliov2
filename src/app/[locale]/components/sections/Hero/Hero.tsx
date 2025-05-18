"use client";
import { useTranslations } from "next-intl";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section id="home" className="flex items-center justify-center h-[600px] sm:h-[750px] bg-light px-2 sm:px-10">
      <HeroLeft text={t("recommendation")} />
      <HeroCenter title={t.raw("title")} />
      <HeroRight yearsExperience={t("yearsExperience")} experience={t("experience")} />
    </section>
  );
}
