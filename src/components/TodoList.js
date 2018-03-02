import React from 'react';
import style from './TodoList.css'

const TodoList = ({todos, remove}) => {
    return(
        <ul className={style.TodoList}>
            {todos.map((todo) => {
                return <li key={todo.id} onClick={() => remove(todo.id)} >{todo.text}</li>;
            })}
        </ul>
    )
}

export default TodoList;