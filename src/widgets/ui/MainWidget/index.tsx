import { ColorBox } from "@entities/ui";
import * as styles from "./style.css";

type modeType = "color" | "font";

export const MainWidget = ({
  arr,
  title,
  type = "font",
}: {
  arr: string[];
  title: string;
  type?: modeType;
}) => {
  return (
    <div className={styles.mainWidgetContainer}>
      <p className={styles.titleCss}>[ {title} ]</p>
      {arr.map((element) => (
        <div className={styles.contentLisContainer}>
          {type === "color" && <ColorBox hex={element} />}
          {element}
        </div>
      ))}
    </div>
  );
};
