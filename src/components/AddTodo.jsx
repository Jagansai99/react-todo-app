import {useState} from "react";

export default function AddTodo ({addTodo}) {
    const [list, setList] = useState("");

    const handleChange = (e) => {
        setList(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(list);
        setList("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input style={{width:"80%"}} value={list} onChange={handleChange}/>
                <button type={"submit"}>Add</button>
            </div>

        </form>
    )
}