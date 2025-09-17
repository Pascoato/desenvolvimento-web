import Navigation from "./Navigation.jsx";

export default function Header({ title, links }) {
  return (
    <header className="site-header">
      <h1><a href="/">{title}</a></h1>
      <br /> {}
      <Navigation links={links} />
    </header>
  );
}
