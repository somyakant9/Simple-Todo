import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem = ({todo,onDelete}) => {

    const [isCompleted , setIsCompleted] = React.useState(todo.isCompleted);

    const check=(e)=>{
    
        setIsCompleted(e.target.checked);
    }
    

    return (
        <div className={styles.eachdiv} key={todo.id}  >
            <input type="checkbox" checked={isCompleted} onChange={e=>{check(e)}}/>
            <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
            <button onClick={()=>{onDelete(todo.id)}} >Delete</button>
        </div>
    )
}

export { TodoItem }