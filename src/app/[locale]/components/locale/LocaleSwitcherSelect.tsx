"use client";

import { Select } from "@radix-ui/themes";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import Image from "next/image";

type Props = {
  defaultValue: string;
  label: string;
};

const localeIcons: Record<string, string> = {
  en: "/english-icon.png",
  es: "/spain-icon.png",
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error Ignore TypeScript warnings for dynamic params
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onSelectChange}>
      <Select.Trigger className="bg-transparent border rounded-full shadow-sm flex items-center justify-center w-full" />
      <Select.Content className="bg-white shadow-md rounded-lg">
        {routing.locales.map((locale) => (
          <Select.Item key={locale} value={locale} className="flex items-center gap-2 px-4 py-2">
            <Image
              src={localeIcons[locale]}
              alt={locale}
              width={20}
              height={20}
              className="w-[40px] h-[31px] rounded-full"
            />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
