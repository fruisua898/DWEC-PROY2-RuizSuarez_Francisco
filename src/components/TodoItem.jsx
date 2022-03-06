import React from 'react'




const TodoItem = ({todo, toggleTodo}) => {
  const {id, task, completed} = todo; 

  const handleTodoClick = () => {
    toggleTodo(id);
  }
  return (

    <li class="list-group-item">
      <input class="form-check-input" type="checkbox" checked={completed} onChange={handleTodoClick}/>
      {task}
    </li>
  )
}

export default TodoItem