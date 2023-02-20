import { renderToString, renderToStaticMarkup } from "react-dom/server";
import React from "react";
import styles from "./icon.module.scss";

function Icon({ icon: IconComponent, name }) {
  console.log({
    IconComponent: renderToString(<IconComponent />),
    Static: renderToStaticMarkup(<IconComponent />),
  });

  return (
    <div className={styles.iconWrapper}>
      <button className={styles.icon}>
        <IconComponent />
      </button>
      <div className={styles.iconLabel}>{name}</div>
    </div>
  );
}

export default Icon;
