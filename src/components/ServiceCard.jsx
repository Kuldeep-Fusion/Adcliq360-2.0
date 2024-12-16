import Image from "next/image"; // Ensure Next.js Image is imported
import Customcss from "./ServiceCard.module.css";

const ServiceCard = ({ img, title, pera }) => {
  return (
    <div>
      <section>
        <div className={Customcss.card}>
          <Image src={img} alt="Logo" width={80} height={50} />
          <h4 className={Customcss.title}>{title}</h4>
          <p className={Customcss.pera}>{pera}</p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCard;
