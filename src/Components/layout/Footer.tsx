import { getIcon } from "../../Data/api";
import styles from "../../Styles/Components/layout/Footer.module.css";

interface FooterProps {
  name: string;
  repoUrl: string;
}

const CodebergIcon = getIcon("codeberg");

function Footer({ name, repoUrl }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a
          className={styles.repoLink}
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el código del portafolio en Codeberg"
        >
          <CodebergIcon
            className={styles.repoIcon}
            aria-hidden
            focusable={false}
          />
          <span>Código</span>
          <span className={styles.external} aria-hidden>
            ↗
          </span>
        </a>
        <p className={styles.copy}>
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
