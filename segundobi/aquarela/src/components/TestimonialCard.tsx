import "../styles/testimonials.css";
import Star from "../assets/star.svg";
import StarOuter from "../assets/starouter.svg";

interface TestimonialCardProps {
  image: string;
  testimony: string;
  name: string;
  title: string;
}

export default function TestimonialCard({
  image,
  testimony,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={image} alt={`Foto de ${name}`} />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      <span className="rating">
        <img src={Star} alt="icone estrela" width={22} height={20} />
        <img src={Star} alt="ícone estrela" width={22} height={20} />
        <img src={Star} alt="icone estrela" width={22} height={20} />
        <img src={Star} alt="icone estrela" width={22} height={20} />
        <img
          src={StarOuter}
          alt="icone estrela sem fundo"
          width={20}
          height={22}
        />
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{title}</p>
      </span>
    </div>
  );
}
