import { ColorBox } from "@entities/ui";
import * as styles from "./style.css";

type modeType = "color" | "font";

export const MainWidget = ({
  arr,
  type = "font",
}: {
  arr: string[];
  type?: modeType;
}) => {
  return (
    <div className={styles.mainWidgetContainer}>
      {arr.map((element) => (
        <div className={styles.oneListContainer}>
          {type === "color" && <ColorBox hex={element} />}
          {element}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};
