import "./contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Mensaje enviado correctamente");
  };

  return (
    <div className="containerContact">
      <div className="containerInfo">
        <header className="contactHeader">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
        </header>
        
        <div className="infoAndForm">
          <div className="infoStore">
            <div className="storeCard">
              <h2>Visita Nuestra Tienda</h2>
              <p className="storeAddress">
                <i className="bi bi-geo-alt"></i>
                Calle falsa 123, Ciudad, País
              </p>
              <div className="storeImage">
                <img 
                  src="src/assets/images/localMates.png" 
                  alt="Nuestro local de mates" 
                />
              </div>
              
              <div className="contactMethods">
                <h3>Síguenos en redes</h3>
                <div className="socialMedia">
                  <a href="#" className="socialLink" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="socialLink" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a href="#" className="socialLink" aria-label="Email">
                    <i className="bi bi-envelope"></i>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="formContainer">
            <h2>Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <input 
                  type="text" 
                  placeholder=" " 
                  id="name"
                  required 
                />
                <label htmlFor="name">Nombre completo</label>
              </div>
              
              <div className="inputGroup">
                <input 
                  type="email" 
                  placeholder=" " 
                  id="email"
                  required 
                />
                <label htmlFor="email">Correo electrónico</label>
              </div>
              
              <div className="inputGroup">
                <input 
                  type="tel" 
                  placeholder=" " 
                  id="phone"
                />
                <label htmlFor="phone">Teléfono</label>
              </div>
              
              <div className="inputGroup">
                <textarea 
                  placeholder=" "
                  id="message"
                  rows="4"
                  required
                ></textarea>
                <label htmlFor="message">Tu mensaje</label>
              </div>
              
              <button type="submit" className="submitBtn">
                <span>Enviar mensaje</span>
                <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;