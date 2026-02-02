import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgWORDPRESS from "../assets/techno/wordpress.png";
import imgELEMENTOR from "../assets/techno/elementor.png";
import imgSPRINGBOOT from "../assets/techno/springboot.png";

import mepua from "../assets/companies/mepua.jpg";
import ande from "../assets/companies/ande.jpg";
import anien from "../assets/companies/anien.png";
import mpten from "../assets/companies/mpten.png";

const Experiences = () => {
  const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
    { id: 10, name: "WordPress", image: imgWORDPRESS },
    { id: 11, name: "Elementor", image: imgELEMENTOR },
    { id: 12, name: "Spring Boot", image: imgSPRINGBOOT },
  ];

  const experiences = [
    {
      id: 1,
      role: "Référent technique",
      company: "MEPUA (Projet de connectivité des écoles)",
      period: "Mars 2025 - Présent",
      description: [
        "Suivi de l’évolution des écoles connectées dans la région de Kindia.",
        "Collaboration avec l’entreprise Mouna dans le cadre du projet GIGA.",
      ],
      image: mepua,
    },
    {
      id: 2,
      role: "Développeur Web",
      company: "ANDE (Agence Nationale de Digitalisation de l’État)",
      period: "Mars 2022 - Présent",
      description: [
        "Développement et maintenance de sites web institutionnels.",
        "Contribution aux projets de digitalisation du gouvernement.",
      ],
      image: ande,
    },
    {
      id: 3,
      role: "Ingénieur Développeur",
      company:
        "ANIEN (Agence Nationale de l’Innovation et de l’Économie Numérique)",
      period: "Sept 2020 - Jan 2022",
      description: [
        "Développement d’applications web et de systèmes internes.",
        "Participation à la mise en place de solutions numériques innovantes.",
      ],
      image: anien,
    },
    {
      id: 4,
      role: "Ingénieur Informaticien",
      company:
        "MPTEN SMSI (Service Modernisation des Systèmes Informatiques) du Ministère de la Poste, des Télécommunications et de l’Économie Numérique",
      period: "Jan 2020 - Sept 2022",
      description: [
        "Supervision du réseau informatique et assistance technique.",
        "Participation à la modernisation des infrastructures numériques du ministère.",
      ],
      image: mpten,
    },
    {
      id: 5,
      role: "Coordinateur d’incubateur",
      company:
        "Gouv-Lab (Laboratoire d’innovation publique du Ministère de la Poste, des Télécommunications et de l’Économie Numérique)",
      period: "Jan 2020 - Sept 2022",
      description: [
        "Coordination des activités TIC du laboratoire d’innovation gouvernementale.",
        "Appui à la formation et à l’accompagnement des jeunes entrepreneurs.",
      ],
      image: anien,
    },
  ];

  return (
    <div id="Experiences">
      <Title title="Expériences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col bg-base-300 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-2">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover w-10 h-10 "
                />
                <div>
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role} , {experience.company}
                  </h1>
                </div>
                <span className="text-sm">{experience.period}</span>
              </div>

              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index} className="text-sm list-disc ml-4">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
