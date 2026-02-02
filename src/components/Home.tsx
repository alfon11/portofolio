import { Mail } from "lucide-react";
import img from "../assets/profil.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
      id="Home"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
          Bonjour , <br /> je suis {""}
          <span className="text-accent">LANCINE CONDE</span>
        </h1>
        <p className="my-4 text-md-center md:text-left">
          Développeur Full Stack passionné par la création d'expériences web
          innovantes et performantes <br />
          avec 8 ans d'expériences, utilisant les technologies modernes React{" "}
          <br /> nextjs, angular, wordpress , Java, springboot et nodejs pour
          transformer les idées en réalité. <br />
          Accredité AOS ( Accredited Operation Specialist) par Uptime institut.{" "}
          <br />
          Accredité Sustainable public procurement for school connectivity par
          l'ITU. <br />
          Contactez-moi si vous avez besoin de mes services.
        </p>
        <a
          href="mailto:ecofconde@gmail.com"
          className="btn btn-accent md:w-fit"
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
        <a
          href="https://wa.me/224622353898"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent md:w-fit mt-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className="w-5 h-5 mr-2"
          />
          WhatsApp
        </a>
      </div>
      <div className="md:ml-60">
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
