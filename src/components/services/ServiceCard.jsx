import Reveal from "../common/Reveal";

const ServiceCard = ({ service, index }) => {
  const [icon, title, description] = service;
  return (
    <Reveal className={`card service delay-${index}`}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Reveal>
  );
};

export default ServiceCard;
