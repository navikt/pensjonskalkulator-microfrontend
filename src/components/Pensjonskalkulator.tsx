import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import useTranslate from "../language/useTranslate";
import styles from "./Komponent.module.css";

const Pensjonskalkulator = () => {
  return (
    <a className={styles.container} href="https://www.nav.no/pensjon/kalkulator/login">
      <div className={styles.ikonOgTekstContainer}>
        <div>
          <Heading size="small" level="2">
            Pensjonskalkulator
          </Heading>
          <BodyLong size="medium">{useTranslate("microfrontendTitle")}</BodyLong>
        </div>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Pensjonskalkulator;
