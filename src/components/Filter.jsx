

export default function Filter({ setFilter }) {
    const handleSetFilter = (filter) => {
        setFilter(filter);
    }
    return (
        <div style={{ paddingTop: "10px",display: "flex", gap: "10px" }}>
            <button onClick={() => handleSetFilter("all")}>All</button>
            <button onClick={() => handleSetFilter("pending")}>Pending</button>
            <button onClick={() => handleSetFilter("completed")}>Completed</button>
        </div>
    )
}