import { useEffect, useState } from "react";
import axios from "axios";
import "./topBox.css";

const TopBox = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/dashboard/top-users", {
          withCredentials: true,
        });
        setTopUsers(res.data);
      } catch (error) {
        console.error("Error al obtener usuarios con más compras:", error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="topBox">
      <h1>Usuarios con Mayores Compras</h1>
      <div className="list">
        {topUsers.map((user, i) => (
          <div className="listItem" key={i}>
            <div className="user">
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
