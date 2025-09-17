export default function Navigation({ links = [] }) {
  return (
    <nav aria-label="Navegação principal" role="navigation">
      <ul className="menu" id="menu-principal">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
