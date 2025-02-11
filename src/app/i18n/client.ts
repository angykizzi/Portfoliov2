'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((lng: string, ns: string, cb: (err: null | Error, resources?: any) => void) => {
    import(`./locales/${lng}/${ns}.json`)
      .then((resources) => cb(null, resources))
      .catch((error) => cb(error, null));
  }))
  .init(getOptions());

export default i18n;
