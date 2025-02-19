"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import HelloBubble from '../ui/HelloBubble';
import PortfolioButton from '../ui/PortfolioButton';

export default function Hero() {
    const t = useTranslations('Home');
    const title = t.raw("title");
    return (
        <section id="home" className="flex items-end h-[850px] justify-center bg-light">

            <div className='justify-start max-w-[300px] text-principal font-light text-xl text-left'>
                <Image src="/quotes.png" alt="Picture of the author" width={30} height={30} />
                {t('recommendation')}
            </div>

            <div className='flex flex-col items-center gap-0'>
                <div>
                    <HelloBubble />
                </div>
                <h1 className="text-8xl font-medium text-principal max-w-[900px] text-center">
                    {title.split(/<name>|<\/name>/).map((part: string, index: number) =>
                        part === "Angely" ? (
                            <span key={index} className="text-secundary">
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}
                </h1>
                <div className="relative mt-[-150px] z-2">

                    <Image
                        src="/foto.png"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                    />

                    <div className="absolute left-[17%] bottom-[40px] z-3">
                        <PortfolioButton />
                    </div>
                </div>
            </div>

            <div>
                <Image
                    src="/start.png"
                    alt="Picture of the author"
                    width={160}
                    height={100}
                />
                <h2 className='text-principal font-bold text-3xl text-right'> {t('yearsExperience')} </h2>
                <p className='text-principal font-medium text-right'>{t('experience')}</p>
            </div>
        </section>
    );
} 
