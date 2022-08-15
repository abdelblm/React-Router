import React from 'react'

function Form() {
  return (
    <div>
        <form>
      <input type="text" class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option >Clear finished tasks</option>
          <option>Clear act pomodoros</option>
          <option >Save as templae</option>
          <option >Add form templates</option>
          <option >Clear all tasks</option>



        </select>
      </div>
    </form>
    </div>
  )
}

export default Form