import TaskCard from "./TaskCard";

const Column = ({ status, title, todos, onDropTask, onEdit, onDelete }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("todoId");
    if (todoId) {
      onDropTask(Number(todoId), status);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="list"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="list-title">{title}</h2>
      {todos.map((todo) => (
        <TaskCard
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Column;