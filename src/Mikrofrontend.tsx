import App from "./App";
import { LanguageProvider } from "./language/LanguageProvider";
import { initAmplitude } from "./utils/amplitude";

initAmplitude();
const Mikrofrontend = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
