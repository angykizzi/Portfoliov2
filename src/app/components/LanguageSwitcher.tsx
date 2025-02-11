'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { languages } from '../i18n/settings';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng; // Change the language in the URL path

    startTransition(() => {
      router.push(segments.join('/')); // Navigate to the new language route
    });
  };

  return (
    <div className="flex gap-2">
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-4 py-2 border rounded ${
            isPending ? 'opacity-50' : ''
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
