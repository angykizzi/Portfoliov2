import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function PortfolioButton() {
    const t = useTranslations('Home');

    return (
        <div className="flex items-center justify-between bg-opacity-20 rounded-full border border-white px-4 py-2 shadow-md text-2xl font-light w-[250px] md:w-[360px]">
            {/* Left Button - Portfolio */}
            <Link
                href="/portfolio"
                className="flex items-center gap-2 bg-secundary text-white px-4 py-2 md:px-8 md:py-4 rounded-full transition-all hover:opacity-90 text-base md:text-xl"
            >
                {t('portfolio')}
                <ArrowUpRight size={16} />
            </Link>

            {/* Right Button - Hire Me (Opens in new tab) */}
            <a
                href="https://your-hire-me-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-black hover:underline text-base md:text-xl"
            >
                {t('hireMe')}
            </a>
        </div>
    );
}
