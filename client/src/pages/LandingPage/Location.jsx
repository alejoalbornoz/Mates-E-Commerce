import './Location.css';

function Location() {
  return (
    <div className="containerLocation">
      <div className="locationHeader">
        <h1>Encuéntranos</h1>
        <div className="divider"></div>
        <p className="subtitle">Visítanos en nuestro local o contáctanos a través de nuestras redes</p>
      </div>

      <div className="locationContent">
        <div className="infoSection">
          <div className="infoCard">
            <div className="icon">📍</div>
            <div className="infoText">
              <h3>Dirección</h3>
              <p>Calle Falsa 123, Ciudad, País</p>
            </div>
          </div>

          <div className="infoCard">
            <div className="icon">🕒</div>
            <div className="infoText">
              <h3>Horario</h3>
              <p>Lunes a Viernes</p>
              <p>9:00 - 18:00</p>
            </div>
          </div>

          <div className="infoCard">
            <div className="icon">📞</div>
            <div className="infoText">
              <h3>Teléfono</h3>
              <p>+123 456 789</p>
            </div>
          </div>
        </div>

        <div className="mapSection">
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0182829561395!2d-58.38647311056184!3d-34.60369918775099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1746131585154!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en mapa"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="socialSection">
        <h3>Síguenos en redes</h3>
        <div className="sociales">
          <a href="#" className="socialLink" aria-label="Instagram">
            <span className="bi bi-instagram"></span>
            <span>Instagram</span>
          </a>
          <a href="#" className="socialLink" aria-label="WhatsApp">
            <span className="bi bi-whatsapp"></span>
            <span>WhatsApp</span>
          </a>
          <a href="#" className="socialLink" aria-label="Email">
            <span className="bi bi-envelope"></span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Location;