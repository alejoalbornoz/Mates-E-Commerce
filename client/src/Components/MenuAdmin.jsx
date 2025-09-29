import { menu } from "../data/data";
import { Link } from "react-router";
import "./menuAdmin.css";

const MenuAdmin = () => {
  return (
    <div className="menuAdmin">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
                <span className={listItem.icon}></span>
              <span > {listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuAdmin;
