import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HelloBubble() {
    const t = useTranslations('Home');
    return (
        <div className="relative flex items-center justify-center animate-bounce ">
            {/* Speech Bubble */}
            <div className="px-6 py-2 border-2 border-black rounded-full text-black text-lg font-medium relative z-10">
                {t('helloBubble')}
            </div>

            {/* Decorative Pink Lines */}
            <div className="absolute top-[-25px] right-[-25px]">
                <Image src="/pink-curved-line.png" alt="Pink Lines" width={35} height={35} />
            </div>
        </div>
    );
}
