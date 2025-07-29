import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateProfile.css";

function UpdateProfile() {
  const [user, setUser] = useState({ email: "" });

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const [showPassForm, setShowPassForm] = useState(false);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/profile", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  const handleEmailChange = async (e) => {
    e.preventDefault();
    if (email1 !== email2) return setMsg("Los emails no coinciden");

    try {
      await axios.put(
        "http://localhost:4000/api/update",
        { email: email1 },
        { withCredentials: true }
      );
      setMsg("Email actualizado");
      setUser({ ...user, email: email1 });
      setEmail1("");
      setEmail2("");
      setShowEmailForm(false);
    } catch {
      setMsg("Error al actualizar email");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) return setMsg("Las contraseñas no coinciden");

    try {
      await axios.put(
        "http://localhost:4000/api/update",
        { password: pass1 },
        { withCredentials: true }
      );
      setMsg("Contraseña actualizada");
      setPass1("");
      setPass2("");
      setShowPassForm(false);
    } catch {
      setMsg("Error al actualizar contraseña");
    }
  };

  return (
    <div className="profile-container">
      <h2>Perfil de {user.username}</h2>

      {/* Email */}
      <div className="section">
        <div className="row">
          <label>Email actual:</label>
          <div className="inline-group">
            <span>{user.email}</span>
            {!showEmailForm && (
              <button onClick={() => setShowEmailForm(true)}>Cambiar</button>
            )}
          </div>
        </div>

        {showEmailForm && (
          <form onSubmit={handleEmailChange} className="update-form">
            <input
              type="email"
              placeholder="Nuevo email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Confirmar nuevo email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              required
            />
            <div className="actions">
              <button type="submit">Guardar email</button>
              <button type="button" onClick={() => setShowEmailForm(false)}>
                Cancelar
              </button>
            </div>
          </form>
        )}

        {showPassForm && (
          <form onSubmit={handlePasswordChange} className="update-form">
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
              required
            />
            <div className="actions">
              <button type="submit">Guardar contraseña</button>
              <button type="button" onClick={() => setShowPassForm(false)}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contraseña */}
      <div className="section">
        <div className="row">
          <label>Contraseña:</label>
          <div className="inline-group">
            <span>••••••••</span>
            {!showPassForm && (
              <button onClick={() => setShowPassForm(true)}>Cambiar</button>
            )}
          </div>
        </div>

        {showPassForm && (
          <form onSubmit={handlePasswordChange}>
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
              required
            />
            <div className="actions">
              <button type="submit">Guardar contraseña</button>
              <button type="button" onClick={() => setShowPassForm(false)}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>

      {msg && <p className="message">{msg}</p>}
    </div>
  );
}

export default UpdateProfile;
