import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul class="list-group">
        {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
    </ul>
  )
}

export default TodoList