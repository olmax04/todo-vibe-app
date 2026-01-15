import './TodoList.css'
import TodoItem from './TodoItem'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

function TodoList({ todos, onToggle, onDelete }) {
  const { language } = useLanguage()
  const t = translations[language]

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">{t.todoList.empty.icon}</div>
        <p className="empty-text">{t.todoList.empty.text}</p>
        <p className="empty-hint">{t.todoList.empty.hint}</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          index={index}
        />
      ))}
    </div>
  )
}

export default TodoList
