import Button from "./Button";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="container">
      <header>
        <p>Fale conosco</p>
        <h2>Estamos aqui por você</h2>
        <p>
          Ficou com alguma dúvida sobre tamanhos, disponibilidade de peças ou
          quer saber onde estamos? Mande uma mensagem ou venha tomar um café com
          a gente! ☕
        </p>
      </header>
      <form>
        <input type="email" placeholder="Seu melhor Email" />
        <textarea placeholder="Olá! Gostaria de saber se vocês tem aquele vestido da coleção nova no tamanho M..."></textarea>
        <Button text="Enviar" />
      </form>
    </section>
  );
}
