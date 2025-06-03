import  { useState } from "react";

const TaskCard = ({ todo, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.todo);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("todoId", todo.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, { todo: title });
    setEditing(false);
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={handleDragStart}
    >
      {editing ? (
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{todo.todo}</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;