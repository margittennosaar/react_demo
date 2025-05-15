import "./TodoCard.css";

function TodoCard({ title, completed, username }) {
  return (
    <div className="todo-card">
      <p className={`todo-status ${completed ? "" : "incomplete"}`}>
        {completed ? "✅ completed" : "❌ non completed"}
      </p>
      <h2 className="todo-title">{title}</h2>
      <div className="todo-user">
        <img
          className="todo-avatar-small"
          src={`https://robohash.org/${username}?set=set4&size=40x40`}
          alt={`Avatar of ${username}`}
        />
        <p className="todo-meta">{username}</p>
      </div>
    </div>
  );
}

export default TodoCard;
