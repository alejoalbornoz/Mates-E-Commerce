import style from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.container}>
          <p className={style.textEmpresa}>
            © 2025 Alejo Angel Albornoz. Todos los derechos reservados.
          </p>
          <ul className={style.listInline}>
            <li className={style.listInlineItem}>
              <a href="#">Política de privacidad</a>
            </li>
            <li className={style.listInlineItem}>
              <a href="#">Términos de servicio</a>
            </li>
            <li className={style.listInlineItem}>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
