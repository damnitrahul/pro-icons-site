import styles from "./iconsPage.module.scss";
import * as ProIcons from "@procol-tech/pro-icons";
import Icon from "../icon";

function IconsPage() {
  return (
    <div className={styles.iconsPageWrapper}>
      <main className={styles.iconsPageListWrapper}>
        {Object.keys(ProIcons).map((key) => (
          <Icon icon={ProIcons[key]} key={key} name={key} />
        ))}
      </main>
    </div>
  );
}

export default IconsPage;
