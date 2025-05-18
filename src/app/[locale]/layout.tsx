import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/app/[locale]/components/layout/NavBar";
import './globals.css'
import { Urbanist, ABeeZee } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
})

const abeezee = ABeeZee({
  subsets: ['latin'],
  weight: '400',
})

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={urbanist.className}>
      <body>
        <Theme>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Theme>
      </body>
    </html>
  );
}