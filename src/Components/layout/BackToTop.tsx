import { useEffect, useState } from "react";
import styles from "../../Styles/Components/layout/BackToTop.module.css";

// Floating shortcut back to the top of the page
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={styles.button}
      href="#top"
      aria-label="Volver arriba"
      data-visible={visible ? "true" : "false"}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true">↑</span>
    </a>
  );
}

export default BackToTop;
