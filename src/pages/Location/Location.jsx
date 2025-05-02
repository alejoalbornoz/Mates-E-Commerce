import style from './Location.module.css';

function Location() {
  return (
    <div className={style.containerLocation}>
      <h1>Ubicación</h1>
      <p>Estamos ubicados en la Calle Falsa 123, Ciudad, País.</p>
      <p>Horario de atención: Lunes a Viernes de 9:00 a 18:00.</p>
      <p>Teléfono: +123456789</p>

      <div className={style.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0182829561395!2d-58.38647311056184!3d-34.60369918775099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1746131585154!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        
      </div>

      <div className={style.sociales}>
          <ul>
            <li class="bi bi-instagram"><a href=""></a></li>
            <li class="bi bi-whatsapp"><a href=""></a></li>
            <li class="bi bi-envelope"><a href=""></a></li>
          </ul>
          

      </div>
    </div>
  );
}

export default Location;
