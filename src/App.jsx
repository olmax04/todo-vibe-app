import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './translations'

function App() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  const subtitleText = totalCount > 0
    ? t.subtitle.completed.replace('{completed}', completedCount).replace('{total}', totalCount)
    : t.subtitle.empty

  return (
    <div className="app">
      <LanguageSwitcher />
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="title-icon">✓</span>
            {t.title}
          </h1>
          <p className="subtitle">
            {subtitleText}
          </p>
        </header>

        <AddTodo onAdd={addTodo} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
