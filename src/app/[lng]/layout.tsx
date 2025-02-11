import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';

interface LayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: LayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <header className="p-4 border-b flex justify-end">
          <LanguageSwitcher />  {/* 🔄 Add Language Switcher here */}
        </header>
        {children}
      </body>
    </html>
  );
}
