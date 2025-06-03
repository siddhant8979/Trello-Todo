import Column from "./Column";
import AddTaskForm from "./AddTaskForm";
import useTodos from "../hooks/useTodos";

const STATUS_MAP = [
  { status: "pending", title: "Pending" },
  { status: "completed", title: "Completed" },
];

const Board = () => {
  const { todos, loading, addTodo, editTodo, removeTodo } = useTodos();

  const handleDropTask = (todoId, newStatus) => {
    const todo = todos.find((t) => t.id === todoId);
    if (!todo) return;
    let updates = {};
    if (newStatus === "completed") {
      updates = { completed: true, status: undefined };
    } else if (newStatus === "in-progress") {
      updates = { completed: false, status: "in-progress" };
    } else {
      updates = { completed: false, status: undefined };
    }
    editTodo(todoId, updates);
  };

  const getTodosByStatus = (status) => {
    if (status === "completed") return todos.filter((t) => t.completed);
    if (status === "in-progress") return todos.filter((t) => !t.completed && t.status === "in-progress");
    return todos.filter((t) => !t.completed && !t.status);
  };

  return (
    <div>
      <AddTaskForm onAdd={addTodo} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="board">
          {STATUS_MAP.map((col) => (
            <Column
              key={col.status}
              status={col.status}
              title={col.title}
              todos={getTodosByStatus(col.status)}
              onDropTask={handleDropTask}
              onEdit={editTodo}
              onDelete={removeTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;