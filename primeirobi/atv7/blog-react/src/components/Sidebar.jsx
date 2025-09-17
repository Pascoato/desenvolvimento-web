export default function Sidebar({ related = [] }) {
  return (
    <aside className="sidebar">
      <h3>Posts relacionados</h3>
      <ul>
        {related.map((item, i) => (
          <li key={i}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
