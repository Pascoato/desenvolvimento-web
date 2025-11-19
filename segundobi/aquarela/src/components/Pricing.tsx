import PricingCard from "./PricingCard";
import "../styles/pricing.css";

export default function Pricing() {
  return (
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
  );
}
