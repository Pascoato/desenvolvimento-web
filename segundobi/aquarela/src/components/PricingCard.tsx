import Button from "./Button";
import Checkmark from "../assets/check.svg";
import "../styles/pricing.css";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceDetails?: string;
  features: string[];
  buttonText: string;
  isPremium?: boolean;
  isSecondaryButton?: boolean;
  bonusText?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  priceDetails,
  features,
  buttonText,
  isPremium = false,
  isSecondaryButton = false,
  bonusText,
}: PricingCardProps) {
  const cardClass = isPremium ? "pricing-card premium" : "pricing-card";

  return (
    <div className={cardClass}>
      {bonusText && (
        <span className="bonus">
          <p>{bonusText}</p>
        </span>
      )}

      <span className="plan">
        <h3>{title}</h3>
        <p>{description}</p>
      </span>

      <span className="price">
        <h2>{price}</h2>
        {priceDetails && <p>{priceDetails}</p>}
      </span>

      <Button text={buttonText} secondary={isSecondaryButton} />

      <span className="hr" />

      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <img src={Checkmark} alt="Ícone de check" />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
