export const fallbackLng: string = 'en';
export const languages: string[] = [fallbackLng, 'es']; // Add more if needed
export const defaultNS: string = 'translation';

export const getOptions = (lng: string = fallbackLng, ns: string = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  ns,
  defaultNS,
});
