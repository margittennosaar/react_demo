import { useEffect, useState } from "react";
import TodoCard from "../../components/TodoCard/TodoCard";
import axios from "axios";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");

  const simulateLoading = (callback) => {
    setTimeout(callback, 1500);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, []);

  useEffect(() => {
    if (todos.length && users.length) {
      simulateLoading(() => setLoading(false));
    }
  }, [todos, users]);

  const filteredData = todos.filter((todo) => {
    const matchStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "completed"
        ? todo.completed
        : !todo.completed;

    const matchUser =
      userFilter === "all" ? true : todo.userId === Number(userFilter);

    return matchStatus && matchUser;
  });

  return (
    <>
      <div className="container">
        <h1>Todos listing</h1>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div>
            <div className="todo-selections">
              <label>Filter by status:</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not completed</option>
              </select>
              <label>Filter by user:</label>
              <select
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
              >
                <option value="all">All users</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="todo-grid">
              {filteredData.map((todo) => {
                const user = users.find((user) => user.id === todo.userId);
                return (
                  <TodoCard
                    key={todo.id}
                    username={user?.name || "Unknown"}
                    title={todo.title}
                    completed={todo.completed}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
