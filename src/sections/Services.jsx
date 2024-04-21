import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((s) => (
        <ServiceCard key={s.label} {...s} />
      ))}
    </section>
  );
};

export default Services;
