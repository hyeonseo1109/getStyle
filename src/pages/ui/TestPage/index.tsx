import { TestWidget } from "@widgets/ui";
import * as styles from "./style.css";

export const TestPage = () => {
  return (
    <div className={styles.testPageContainer}>
      <p>TestPage</p>
      <TestWidget />
    </div>
  );
};
