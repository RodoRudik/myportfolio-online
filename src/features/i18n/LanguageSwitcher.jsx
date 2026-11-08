import { useLanguage } from './useLanguage';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        type="button"
        className={language === 'en' ? 'selected' : ''}
        aria-pressed={language === 'en'}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        className={language === 'es' ? 'selected' : ''}
        aria-pressed={language === 'es'}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;