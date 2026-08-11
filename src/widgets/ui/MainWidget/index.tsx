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
      <p>{title}</p>
      {arr.map((element) => (
        <div>
          {type === "color" && <ColorBox hex={element} />}
          {element}
        </div>
      ))}
    </div>
  );
};
