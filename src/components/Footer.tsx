import { Container, Facebook, LucideLinkedin, X, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  p-10">
      <aside>
        <Container className="w-10 h-10" />

        <p className="font-bold">
          LANCINE
          <span className="text-accent">CONDE</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous les droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/lancin%C3%A9-cond%C3%A9-a8552bab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LucideLinkedin className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.facebook.com/alfon.conde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
