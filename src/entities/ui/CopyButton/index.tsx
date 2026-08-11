import { copyContent } from "@features/hook";
import * as styles from "./style.css";

export const CopyButton = ({ element }: { element: string }) => {
  return (
    <button
      className={styles.copyButtonCss}
      onClick={() => copyContent(element)}
    >
      복사
    </button>
  );
};
