import { useEffect, useState } from "react";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  const addTodo = async (todo) => {
    const newTodo = await createTodo(todo);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const editTodo = async (id, updates) => {
    const updated = await updateTodo(id, updates);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updated } : todo))
    );
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, loading, addTodo, editTodo, removeTodo };
}