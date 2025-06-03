const API_URL = "https://dummyjson.com/todos";

export async function fetchTodos() {
  const res = await fetch(`${API_URL}?limit=100`);
  const data = await res.json();
  return data.todos;
}

export async function createTodo(todo) {
  const res = await fetch(API_URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
}

export async function updateTodo(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}