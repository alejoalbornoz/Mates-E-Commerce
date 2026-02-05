import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./LoginPage.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/productos";
    }
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <div className="login-box">
        {Array.isArray(loginErrors) &&
          loginErrors.map((error, i) => (
            <span key={i} className="error-text">
              {error}
            </span>
          ))}
        <h1 className="login-title">Inciar sesion 🧉</h1>
        <form onSubmit={onSubmit} className="login-form">
          <input
            type="email"
            {...register("email", { required: true })}
            className="login-input"
            placeholder="Email"
          />
          {errors.email && (
            <span className="error-text">Email is required</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="login-input"
            placeholder="Password"
          />
          {errors.password && (
            <span className="error-text">Password is required</span>
          )}
          <button type="submit" className="login-button">
            Iniciar sesion
          </button>
        </form>
        <p className="login-footer">
          ¿No tenés cuenta aún?
          <Link to="/register" className="register-link">
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
