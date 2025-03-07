import Image from "next/image";

interface HeroLeftProps {
  text: string;
}

export default function HeroLeft({ text }: HeroLeftProps) {
  return (
    <div className="hidden lg:flex flex-col justify-center w-[300px] text-principal font-light text-xl text-left mt-auto mb-36">
      <Image src="/quotes.png" alt="Quote Icon" width={30} height={30} />
      {text}
    </div>
  );
}
