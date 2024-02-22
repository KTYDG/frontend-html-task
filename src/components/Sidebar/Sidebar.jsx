import "./sidebar.scss";
import { useCallback, useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import LinkButton from "../LinkButton/LinkButton";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default function Sidebar() {
  const [isClosed, setIsClosed] = useState(true);
  const [currentPath, setCurrentPath] = useState("");

  const toggleSidebar = useCallback(() => {
    setIsClosed(!isClosed);
  }, [isClosed]);

  return (
    <div className={classnames("sidebar", { closed: isClosed })}>
      <div className="header">
        <img className="header__icon" src={logo} alt="TensorFlow logo" />
        <span
          className={classnames("header__title", {
            shrink: isClosed,
          })}
        >
          TensorFlow
        </span>
        <button
          className={classnames("toggle", { closed: isClosed })}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isClosed ? "angle-right" : "angle-left"} />
        </button>
      </div>

      <div className="main">
        <div>
          {routes.map((route, index) => (
            <LinkButton
              key={index}
              route={route}
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              isClosed={isClosed}
            />
          ))}
        </div>

        <div>
          {bottomRoutes.map((route, index) => (
            <LinkButton
              key={index}
              route={route}
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              isClosed={isClosed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
