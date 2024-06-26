import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './ServicesPage.css';
import { servicesOptions } from '../../util/dataServices';

export default function ServicePage() {
  return (
    <section className="services">
      <h3 className="section-title service-title">SERVICES</h3>

      <div className="contain-container">
        <div className="container-cardservices">
          {servicesOptions.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              id={service.id}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
