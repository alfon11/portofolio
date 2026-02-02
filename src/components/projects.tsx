import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import { Github, Video } from "lucide-react";

const projects = () => {
  const projects = [
    {
      id: 1,
      title: "Site web vitrine",
      description:
        "Site web vitrine pour une entreprise d'assurance, mettant en avant ses services et réalisations.",
      technologies: ["WordPress", "Elementor", "Figma"],
      demoLink: "https://gcourtage.africa/",
      repoLink: "#",
      image: img1,
    },
    {
      id: 2,
      title: "Plateforme de gestion des projets",
      description:
        "Plateforme de gestion des taches pour un cabinet d'architecture et d'assistance technique .",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Tailwind CSS",
        "clerk",
        "PostgreSQL",
      ],
      demoLink: "https://projets.caat-architecture.com/",
      repoLink: "#",
      image: img2,
    },
    {
      id: 3,
      title: "Site web d'agence d'architecture",
      description:
        "Site web vitrine pour une agence d'architecture et d'assistance technique.",
      technologies: ["WordPress", "CSS", "JavaScript"],
      demoLink: "https://caat-architecture.com/",
      repoLink: "#",
      image: img3,
    },
    {
      id: 4,
      title:
        "Site web du minitère des Postes, Télécommunications et de l'économie numérique",
      description:
        "Site web institutionnel pour le Ministère des Postes, Télécommunications et de l'économie numérique de Guinée.",
      technologies: ["WordPress", "Elementor", "mySQL"],
      demoLink: "https://mpten.gov.gn/",
      repoLink: "#",
      image: img4,
    },
    {
      id: 5,
      title: "Application web de gestion de facturations",
      description:
        "Application web pour gérer les facturations et les paiements des clients.",
      technologies: [
        "Next.js",
        "Clerk",
        "Prisma",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      demoLink: "https://gfacturation.vercel.app/",
      repoLink: "#",
      image: img5,
    },
    {
      id: 6,
      title: "Application web de gestion de finances",
      description:
        "Application web pour gérer les finances d'une entreprise, incluant les dépenses, les revenus et les rapports financiers.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      demoLink: "https://etrack-navy.vercel.app/",
      repoLink: "#",
      image: img6,
    },
  ];

  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a href={project.demoLink} className="btn btn-accent w-2/3">
                Voir la démo
                <Video className="w-4" />
              </a>
              <a href={project.repoLink} className="btn btn-neutral w-1/3 ml-2">
                Voir le code
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
