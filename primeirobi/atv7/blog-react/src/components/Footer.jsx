export default function Footer({ year, author }) {
  return (
    <footer className="site-footer">
      <small>
        © <time dateTime={String(year)}>{year}</time> Todos os direitos reservados.
      </small>
    </footer>
  );
}
