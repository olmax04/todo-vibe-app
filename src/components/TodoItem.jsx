import { useState } from 'react'
import './TodoItem.css'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function TodoItem({ todo, onToggle, onDelete, index }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      onDelete(todo.id)
    }, 300)
  }

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        className={`checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? t.addTodo.ariaLabel.markIncomplete : t.addTodo.ariaLabel.markCompleted}
      >
        {todo.completed && (
          <svg
            className="checkmark"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
              fill="white"
            />
          </svg>
        )}
      </button>

      <span className="todo-text">{todo.text}</span>

      <button
        className="delete-button"
        onClick={handleDelete}
        aria-label={t.addTodo.ariaLabel.delete}
      >
        <svg
          className="delete-icon"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5L15 15M15 5L5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem
