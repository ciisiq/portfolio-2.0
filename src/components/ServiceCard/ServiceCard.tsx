import './ServiceCard.css';

export type ServiceCardProps = {
  id: number;
  icon: string;
  text: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, text, id }) => {
  return (
    <div key={id} className="card-service">
      <img src={icon} alt="Service icon" />
      <p className="p-services">{text}</p>
    </div>
  );
};

export default ServiceCard;
