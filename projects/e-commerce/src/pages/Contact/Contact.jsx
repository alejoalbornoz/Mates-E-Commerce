import "./contact.css";

function Contact() {
  return (
    <div className="containerContact">
      <div className="containerInfo">
        <h2>Contacto</h2>
        <div className="infoStore">
          <h2>Podes encontrarnos en Calle falsa 123</h2>
          <img src="src/assets/images/localMates.png" alt="" />
        </div>
        <form>
          <input type="email" placeholder="Tu correo electrónico" required />
          <textarea
            rows="4"
            placeholder="Escribí tu mensaje..."
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
