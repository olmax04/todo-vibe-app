import './TodoList.css'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p className="empty-text">Пока нет задач</p>
        <p className="empty-hint">Добавьте первую задачу выше</p>
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
