import './LanguageSwitcher.css'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={t.language.switch}
      title={t.language.switch}
    >
      <span className="language-code">{language.toUpperCase()}</span>
      <svg 
        className="language-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 19.09V17.09C13.41 16.5 12.9 16 12.31 16H11.69C11.1 16 10.59 16.5 10.59 17.09V19.09C7.45 18.53 5.03 16.05 4.47 12.91H6.47C6.99 15.19 8.81 16.99 11.09 17.5V7.5H12.91V17.5C15.19 16.99 17.01 15.19 17.53 12.91H19.53C18.97 16.05 16.55 18.53 13.41 19.09Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

export default LanguageSwitcher
