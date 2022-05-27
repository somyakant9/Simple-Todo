import React from 'react'
import { TodoItem } from './TodoItem'
import styles from './Todolist.module.css'

const Todolist = ({ todos, onDelete }) => {


    return (

        <div className={styles.main}>
            {todos.map((todo) => (
                <TodoItem onDelete={onDelete} todo={todo} key={todo.id} />
            ))}
        </div>
    )

}
export { Todolist }