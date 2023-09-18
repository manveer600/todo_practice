import { useState } from "react";

function Todo({ todoData, isFinished, onEdit, onDelete,changeFinished }) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(todoData);
  const[finished, setFinished] = useState(isFinished);
  return (
    <div>
      <input type="checkbox" checked={finished} onChange={(e)=>{
        setFinished(e.target.checked);
        changeFinished(e.target.checked)
      }}/>
      {editing ? (
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
      ) : (
        <span>{data}</span>
      )}
      <button
        onClick={() => {
          setEditing(!editing);
          onEdit(data);
        }}
      >
        {editing ? "Save" : "Edit"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
