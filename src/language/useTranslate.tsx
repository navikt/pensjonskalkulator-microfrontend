import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  title: {
    nb: "Pensjonskalkulator",
    nn: "Pensjonskalkulator",
    en: "Pensjonskalkulator",
  },
  ingress: {
    nb: "Sjekk vår pensjonskalkulator for å se hvor mye du kan få i pensjon.",
    nn: "Sjekk vår pensjonskalkulator for å se hvor mye du kan få i pensjon.",
    en: "Sjekk vår pensjonskalkulator for å se hvor mye du kan få i pensjon.",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
