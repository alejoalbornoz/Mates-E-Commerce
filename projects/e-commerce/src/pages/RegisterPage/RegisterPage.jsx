import { useForm } from "react-hook-form";
import "./RegisterPage.css";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="register-container">
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
      </form>
    </div>
  );
}

export default RegisterPage;
