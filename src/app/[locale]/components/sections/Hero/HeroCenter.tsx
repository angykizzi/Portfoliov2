import Image from "next/image";
import HelloBubble from "../../ui/HelloBubble";
import PortfolioButton from "../../ui/PortfolioButton";

interface HeroCenterProps {
  title: string;
}

export default function HeroCenter({ title }: HeroCenterProps) {
  return (
    <div className="flex flex-col items-center justify-end gap-0 h-full">
      <HelloBubble />
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium text-principal max-w-[700px] text-center">
        {title.split(/<name>|<\/name>/).map((part: string, index: number) =>
          part === "Angely" ? (
            <span key={index} className="text-secundary">{part}</span>
          ) : (
            part
          )
        )}
      </h1>
      <div className="relative mt-[-50px] md:mt-[-150px] z-2">
        <Image src="/foto.png" alt="Picture of the author" width={600} height={600} className="w-full" />
        <div className="lg:flex hidden absolute left-[30%] sm:left-[35%] md:left-[17%] bottom-[20px] sm:bottom-[40px] z-3">
          <PortfolioButton />
        </div>
      </div>
    </div>
  );
}
