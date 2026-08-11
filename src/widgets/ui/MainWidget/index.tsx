import { ColorBox } from "@entities/ui";
import * as styles from "./style.css";

type modeType = "color" | "hex";

export const MainWidget = ({
  arr,
  title,
  type,
  hex,
}: {
  arr: string[];
  title: string;
  type: modeType;
  hex: string;
}) => {
  return (
    <div className={styles.mainWidgetContainer}>
      <p>{title}</p>
      {arr.map((element) => (
        <div>
          {type === "color" && <ColorBox hex={hex} />}
          {element}
        </div>
      ))}
    </div>
  );
};
