import { BodyLong, Heading } from "@navikt/ds-react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import useTranslate from "../language/useTranslate";
import { logNavigereEvent } from "../utils/amplitude";
import styles from "./Pensjonskalkulator.module.css";

const Pensjonskalkulator = () => {
  return (
    <a className={styles.container} href="https://www.nav.no/pensjon/kalkulator/login" onClick={logNavigereEvent}>
      <div>
        <Heading size="small" level="2">
          {useTranslate("title")}
        </Heading>
        <BodyLong size="medium">{useTranslate("ingress")}</BodyLong>
      </div>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Pensjonskalkulator;
