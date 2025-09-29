import "./contact.css";

function Contact() {
  return (
    <div className="containerContact">
      <div className="containerInfo">
        <h2>Contacto</h2>
        <div className="infoAndForm">
          <div className="infoStore">
            <h2>Podes encontrarnos en Calle falsa 123</h2>
            <img src="src/assets/images/localMates.png" alt="Local" />
            <div className="socialMedia">
              <ul>
                <li className="bi bi-instagram">
                  <a href="#" aria-label="Instagram"></a>
                </li>
                <li className="bi bi-whatsapp">
                  <a href="#"></a>
                </li>
                <li className="bi bi-envelope">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <form>
            <input type="name" placeholder="Nombre" />
            <input type="email" placeholder="Tu correo electrónico" required />
            <input type="tel" placeholder="Teléfono" />
            <textarea
              rows="4"
              placeholder="Escribí tu mensaje..."
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
