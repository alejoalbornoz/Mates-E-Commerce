import axios from "axios";
import { useEffect, useState } from "react";
import "./userAdmin.css";

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/users", {
        withCredentials: true,
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error al cargar los usuarios", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="usersDashboard">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin;
