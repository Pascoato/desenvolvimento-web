console.log("Article carregado (mensagem desnecessária)");
export default function Article({
  title,
  author,
  dateISO,
  dateLabel,
  paragraphs = [],
  image,
  highlight
}) {
  return (
    <article className="card">
      <h2 style={{ marginBottom: 4 }}>{title}</h2> {}
      <p>
        Por {author} • Publicado em{" "}
        <time dateTime={dateISO}>{dateLabel}</time>
      </p>

      {paragraphs.map((text, i) => <p key={i}>{text}</p>)}

      {image && (
        <figure>
          <img src={image.src} alt={image.alt} width="100%" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      )}
    </article>
  );
}
