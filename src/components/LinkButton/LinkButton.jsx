import { useCallback } from "react";
import PropTypes from "prop-types";
import "./linkButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export default function LinkButton({
  route,
  currentPath,
  setCurrentPath,
  isClosed,
}) {
  const goToRoute = useCallback(
    (path) => {
      console.log(`going to "${path}"`);
      setCurrentPath(path);
    },
    [setCurrentPath]
  );

  return (
    <div
      className={classnames("link-button", {
        active: currentPath === route.path,
      })}
      key={route.title}
      onClick={() => goToRoute(route.path)}
    >
      <FontAwesomeIcon className="link-button__icon" icon={route.icon} />
      <span
        className={classnames("link-button__title", {
          shrink: isClosed,
        })}
      >
        {route.title}
      </span>
    </div>
  );
}

LinkButton.propTypes = {
  route: PropTypes.object,
  currentPath: PropTypes.string,
  setCurrentPath: PropTypes.func,
  isClosed: PropTypes.bool,
};
