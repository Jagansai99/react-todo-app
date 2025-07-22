import {useState, useEffect, useCallback, useMemo} from "react";
import AddTodo from "./AddTodo.jsx"
import TodoList from "./TodoList.jsx"
import Filter from "./Filter.jsx"

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos")
        return saved ? JSON.parse(saved) : []
    });
    const [filter, setFilter] = useState("all");

    const addTodo = useCallback((text) => {
        const newTodo = {id: Date.now(), todo: text, completed: false}
        setTodos(prev => [newTodo, ...prev])
    }, [])

    const filteredTodos = todos?.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
    })

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(res => setTodos(res.todos));
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

    return (
        <>
            <AddTodo addTodo={addTodo}/>
            <Filter setFilter={setFilter}/>
            <TodoList todos={filteredTodos} onToggle={toggleComplete} onDelete={deleteTodo}/>
        </>

    )
}
