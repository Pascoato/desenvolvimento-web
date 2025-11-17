import { useState, useEffect } from "react";
import Button from "../components/Button";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ProfileImageOne from "../assets/images/foto.jpg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import Champion from "../assets/champ.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.svg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/contact.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Aquarela" width={220} height={80} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={() => setShowMobileMenu(false)} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#testimonials"
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">Bem-vindo à Aquarela</p>
          <h1>Sua essência em todas as cores e estações.</h1>
          <p>
            Moda atemporal que une conforto, elegância e a leveza que você
            merece. Venha nos visitar e descubra seu novo look favorito para
            brilhar hoje.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Ver Coleção" secondary />
            </span>
          </div>
        </div>
      </section>
      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Feito para você</h2>
            </span>
          </span>
          <p>
            Muito mais do que roupas, entregamos confiança. Na{" "}
            <strong>Aquarela </strong>
            cada detalhe é pensado para valorizar a sua beleza natural com
            qualidade e sofisticação.
          </p>
        </header>

        <section className="even-columns">
          <Card
            icon={Champion}
            iconAlt="Ícone campeão"
            title="Tecidos Premium"
            description="Trabalhamos apenas com tecidos selecionados, focando no toque suave, durabilidade e caimento perfeito para o seu corpo."
          />

          <Card
            icon={Champion}
            iconAlt="Ícone campeão"
            title="Consultoria de Estilo"
            description="Não sabe o que vestir? Nossa equipe é treinada para te ajudar a montar looks incríveis que combinam com sua personalidade."
          />

          <Card
            icon={Champion}
            iconAlt="Ícone campeão"
            title="Moda Versátil"
            description="Peças inteligentes que transitam do trabalho ao happy hour. O equilíbrio perfeito entre a elegância clássica e as tendências atuais."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              testimony="Amei o atendimento! As meninas foram super atenciosas e me ajudaram a renovar meu guarda-roupa de trabalho. As peças são lindas!"
              name="Mariana"
              title="Advogada"
            />

            <TestimonialCard
              image={ProfileImageOne}
              testimony="A qualidade dos tecidos é surreal. Tenho vestidos da Aquarela há anos que parecem novos. Vale cada centavo pelo conforto."
              name="Carla"
              title="Arquiteta"
            />

            <TestimonialCard
              image={ProfileImageOne}
              testimony="A loja é linda e super acolhedora. Virei cliente fiel, toda coleção nova eu preciso passar lá para conferir as novidades."
              name="Fernanda"
              title="Empreendedora"
            />
          </div>

          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              testimony="Amei o atendimento! As meninas foram super atenciosas e me ajudaram a renovar meu guarda-roupa de trabalho. As peças são lindas!"
              name="Mariana"
              title="Advogada"
            />

            <TestimonialCard
              image={ProfileImageOne}
              testimony="A qualidade dos tecidos é surreal. Tenho vestidos da Aquarela há anos que parecem novos. Vale cada centavo pelo conforto."
              name="Carla"
              title="Arquiteta"
            />

            <TestimonialCard
              image={ProfileImageOne}
              testimony="A loja é linda e super acolhedora. Virei cliente fiel, toda coleção nova eu preciso passar lá para conferir as novidades."
              name="Fernanda"
              title="Empreendedora"
            />
          </div>
        </section>
      </section>

      <section className="container" id="pricing">
        <header>
          <span>
            <p className="desktop-only">Planos e preços</p>
            <h2>Clube Aquarela</h2>
          </span>
          <p>
            Participe do nosso clube de vantagens ou contrate nossa consultoria
            personalizada para transformar o seu visual.
          </p>
        </header>

        <section className="even-columns">
          <PricingCard
            title="Cliente Aquarela"
            description="Cadastre-se e fique por dentro de tudo."
            price="Grátis"
            features={[
              "Acesso antecipado a promoções",
              "Dicas de estilo no WhatsApp",
              "Convite para coquetéis de lançamento",
            ]}
            buttonText="Cadastrar Agora"
            isSecondaryButton={true}
          />

          <PricingCard
            title="Aquarela Box"
            description="Receba uma seleção surpresa todo mês."
            price="R$ 149,90"
            priceDetails="/mês"
            features={[
              "1 Look completo surpresa/mês",
              "10% OFF em toda a loja física",
              "Frete grátis para sua casa",
            ]}
            buttonText="Assinar Box"
            isPremium={true}
            bonusText="O MAIS AMADO"
          />

          <PricingCard
            title="Consultoria VIP"
            description="Um dia de transformação com nossa stylist."
            price="R$ 299,90"
            priceDetails="/sessão"
            features={[
              "Análise de coloração pessoal",
              "Montagem de 10 looks na loja",
              "Acompanhamento exclusivo",
            ]}
            buttonText="Agendar Horário"
            isSecondaryButton={true}
          />
        </section>
      </section>

      <section id="contact" className="container">
        <header>
          <p>Fale conosco</p>
          <h2>Estamos aqui por você</h2>
          <p>
            Ficou com alguma dúvida sobre tamanhos, disponibilidade de peças ou
            quer saber onde estamos? Mande uma mensagem ou venha tomar um café
            com a gente! ☕
          </p>
        </header>
        <form>
          <input type="email" placeholder="Seu melhor Email" />
          <textarea placeholder="Olá! Gostaria de saber se vocês tem aquele vestido da coleção nova no tamanho M..."></textarea>{" "}
          <Button text="Enviar" />
        </form>
      </section>
      <Footer />
    </>
  );
}
