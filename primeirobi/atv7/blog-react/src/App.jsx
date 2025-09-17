import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

const unusedHelper = (x) => x;

export default function App() {
  const links = [
    { href: "#", label: "Início", current: true },
    { href: "#sobre", label: "Sobre" },
  ];

  const subtitle = "Um subtítulo que não será exibido";

  const post = {
    title: "Bem-vindo",
    author: "pasco",
    dateISO: "2025-08-27",
    dateLabel: "27/08/2025",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.",
      "Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    ],
    image: {
      src: "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
      alt: "Imagem ilustrativa",
      caption: "qualquer imagem."
    }
  };

  const related = [
    { href: "#post-a", title: "A" },
    { href: "#post-b", title: "B" },
    { href: "#post-c", title: "C" },
  ];

  return (
    <>
      <Header title="Teste de estilização" links={links} />
      {}
      <div id="conteudo-principal">
        <main id="inicio">
          <Article
            title={post.title}
            author={post.author}
            dateISO={post.dateISO}
            dateLabel={post.dateLabel}
            paragraphs={post.paragraphs}
            image={post.image}
            highlight
          />
        </main>
        <Sidebar related={related} />
      </div>
      <Footer year={2025} />
    </>
  );
}
