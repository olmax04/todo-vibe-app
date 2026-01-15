import { useState } from 'react'
import './AddTodo.css'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function AddTodo({ onAdd }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <div className={`input-wrapper ${isFocused ? 'focused' : ''}`}>
        <input
          type="text"
          className="todo-input"
          placeholder={t.addTodo.placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button type="submit" className="add-button" disabled={!text.trim()}>
          <span className="add-icon">+</span>
        </button>
      </div>
    </form>
  )
}

export default AddTodo
