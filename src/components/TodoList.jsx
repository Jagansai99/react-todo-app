
export default function TodoList({todos,onToggle,onDelete}) {

    return (
        <div>
            {
                todos?.map(item => (
                        <div style={{display:'flex', justifyContent: 'space-between',marginTop:'10px'}}>
                            <li style={{textDecoration: item.completed ? 'line-through' : 'none'}} key={item.id} onClick={() => onToggle(item.id)}>{item.todo}</li>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>

                    )

                )
            }
        </div>
    )
}