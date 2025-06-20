import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";

import "./RegisterPage.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/productos");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });


  return (
    <div className="register-container">
      <div className="register-box">
        {Array.isArray(registerErrors) && registerErrors.length > 0 && (
          <div className="form-errors">
            {registerErrors.map((error, i) => (
              <p key={i} className="warning-errors">
                {error}
              </p>
            ))}
          </div>
        )}

        <h1 className="register-title">Crear cuenta 🧉</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          {errors.username && (
            <span className="warning-errors">Username is required</span>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="warning-errors">Email is required</span>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <span className="warning-errors">Password is required</span>
          )}

          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
