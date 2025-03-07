import Image from "next/image";

interface HeroRightProps {
  yearsExperience: string;
  experience: string;
}

export default function HeroRight({ yearsExperience, experience }: HeroRightProps) {
  return (
    <div className="hidden lg:flex flex-col items-end justify-center mt-auto mb-36 gap-2">
      <Image src="/start.png" alt="Experience Icon" width={160} height={100} />
      <h2 className="text-principal font-bold text-3xl text-right">{yearsExperience}</h2>
      <p className="text-principal font-medium text-right">{experience}</p>
    </div>
  );
}
