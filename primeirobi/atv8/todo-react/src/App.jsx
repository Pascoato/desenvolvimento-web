import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
  ]);

  function handleAdd(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    const newTask = { id: Date.now(), text: value };
    setTodos(prev => [newTask, ...prev]);
    setText("");
  }

  function handleRemove(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <>
      <header className="header">
        <h1>To-Do List</h1>
        <nav aria-label="atalhos">
          <a href="#form">Adicionar</a>
          <a href="#lista">Lista</a>
        </nav>
      </header>

      <main className="grid">
        <article className="card">
          <h2 id="form">Adicionar tarefa</h2>
          <form onSubmit={handleAdd}>
            <label htmlFor="task">Tarefa</label>
            <input
              id="task"
              type="text"
              placeholder="De enter ou clique no + para adicionar"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">+</button>
          </form>
        </article>

        <aside className="card">
          <h2 id="lista">Tarefas ({todos.length})</h2>
          <ul className="list">
            {todos.map((t) => (
              <li key={t.id} className="item">
                <span>{t.text}</span>
                <button
                  className="remove"
                  onClick={() => handleRemove(t.id)}
                  aria-label={`Remover ${t.text}`}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          {todos.length === 0 && <p>Nenhuma tarefa ainda.</p>}
        </aside>
      </main>

      <footer className="footer">
        <small>
          © <time dateTime="2025">2025</time>
        </small>
      </footer>
    </>
  );
}
