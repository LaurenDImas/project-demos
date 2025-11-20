import React, {useState} from 'react';
// import "../todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        setTodos((prevState)=>{
            return [...prevState, {id: Math.random(), text: input}];
        })
        setInput("");
    }

    const removeTodo = (id) => setTodos(todos => todos.filter((t) => t.id !== id))

    return (
        <div className="container">
            <input
                type="text"
                placeholder="New Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map((todo) => (
                    <li className="todo" key={todo.id}>
                        <span>{todo.text}</span>
                        <button className="close" onClick={() => removeTodo(todo.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo
