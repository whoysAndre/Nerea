import tiktok from "../../../assets/tiktok_sfxa3k1fcxhs.svg";
import facebook from "../../../assets/facebook_app_logo_rdfz44gsbzzl.svg";
import instagram from "../../../assets/instagram_logo_vtyznosn9smg.svg";
import twitter from "../../../assets/twitter_sign_y9gwza2i3zxo.svg";
import "./Contacto.css";

export const Contacto = () => {
  return (
    <div className="contenedor-principal">
      <div className="formulario">
        <div className="tittle">
          <h3>Formulario</h3>
        </div>
        <div className="pareja">
          <label htmlFor="">Nombre:</label>
          <input type="text" />
        </div>
        <div className="pareja">
          <label htmlFor="">Presupuesto:</label>
          <input type="number" />
        </div>
        <div className="pareja">
          <label htmlFor="">Correo Electronico:</label>
          <input type="email" />
        </div>
        <div className="pareja">
          <label htmlFor="">Mensaje:</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="btn">
          <button type="button">Enviar</button>
        </div>
      </div>
      <div className="icons-container">
        <div className="tittle">
          <h3>Siguenos en nuestras redes sociales</h3>
        </div>
        <div className="iconos">
          <a href="#" className="a-icons">
            <img src={tiktok} alt="Icono de tiktok" />
          </a>
          <a href="#" className="a-icons">
            <img src={twitter} alt="Icono de tiktok" />
          </a>
          <a href="#" className="a-icons">
            <img src={facebook} alt="Icono de tiktok" />
          </a>
          <a href="#" className="a-icons">
            <img src={instagram} alt="Icono de tiktok" />
          </a>
        </div>
      </div>
    </div>
  );
};
