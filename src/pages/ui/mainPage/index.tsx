import { MainWidget } from "@widgets/ui";
import * as styles from "./style.css";
import { ClickButton } from "@entities/ui";

export const MainPage = () => {
  const colorArr = ["#123456", "#234567"];
  const fontArr = ["George"];
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.headerCss}>
        <p className={styles.textCss}>
          사이트에 사용된 색상과 폰트를 조회합니다.
        </p>
        <ClickButton text="조회" />
      </div>
      <div className={styles.arrContainer}>
        <MainWidget arr={colorArr} title="색상" />
        <MainWidget arr={fontArr} title="폰트" />
      </div>
    </div>
  );
};
