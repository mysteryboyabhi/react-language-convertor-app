import { createContext, useContext, useState } from "react";
import "./styles.css";

const langs = {
  en: {
    hello: "Hello World!",
    name: "My name is Abhishek"
  },
  es: {
    hello: "Hola Mundo!",
    name: "mi nombre es Abhishek"
  }
};
const LangContext = createContext();

function FormattedMessage({ id }) {
  const lang = useContext(LangContext);
  return langs[lang][id];
}

function Display() {
  return (
    <>
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <FormattedMessage id="name" />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <button
          onClick={() => {
            setLang("en");
          }}
        >
          english
        </button>
        <button
          onClick={() => {
            setLang("es");
          }}
        >
          spanish
        </button>
        <Display />
      </LangContext.Provider>
    </div>
  );
}
