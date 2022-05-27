import React from "react";
import {Todolist} from './Todolist';
import styles from './Todo.module.css'
const Todo = () => {

    const [todo1, setTodo1] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const handleadd = (e) => {

        let newTodo = (e.target.value);
        setTodo1(newTodo);

    }
    const onDelete=(id)=>{

       let newTodo = todos.filter(el=>el.id !== id);
       setTodos(newTodo);
    }
    
    return (
        <div>
            <div  className={styles.inp}>
                <input type="text" placeholder="Add something" value={todo1} onChange={handleadd} />
                <button onClick={() => {
                    setTodos([...todos, { id: Date.now(),value: todo1, status: false }])
                    setTodo1("")
                }}>Add</button>
            </div>
            <div>
               <Todolist todos={todos} onDelete={onDelete} />
            </div>
        </div>

    )
}

export { Todo }