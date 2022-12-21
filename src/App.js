import './App.css';
import { Convert } from './convert/convert';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import { removerLanguagePrefix } from './i18n';
import { LanguageSwitcher } from './component/LanguageSwitcher/index'

function App() {
  const { t, i18n, i18n: { language } } = useTranslation();

  useLayoutEffect(() => {
    const currentPathname = window.location.href.replace(
      window.location.origin,
      ''
    );

    const newPathname = `/${language}${removerLanguagePrefix(currentPathname)}`;

    if (currentPathname !== newPathname) {
      window.history.replaceState({}, '', newPathname);
    }
  }, [language, i18n]);

  return (
    <Router basename={`/${language}`}>
      <div className="App">
        <LanguageSwitcher />
        <Convert data={t('data', { returnObjects: true })} mainWords={t('mainWords', { returnObjects: true })} />
      </div>
    </Router>
  );
}

export default App;
