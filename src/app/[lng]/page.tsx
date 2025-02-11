'use client'

import { useTranslation } from 'react-i18next';

interface PageProps {
  params: { lng: string };
}

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('home.title')}</h1>
      <p>{t('home.services')}</p>
    </div>
  );
}
