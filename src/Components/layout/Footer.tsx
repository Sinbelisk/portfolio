import styles from "../../Styles/Components/layout/Footer.module.css";

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
