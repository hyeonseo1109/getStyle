import { MainWidget } from "@widgets/ui";
import * as styles from "./style.css";
import { ClickButton } from "@entities/ui";
import { getColor, getFontFamily } from "@features/hook";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [colorArr, setColorArr] = useState<string[]>([]);
  const [fontArr, setFontArr] = useState<string[]>([]);

  const handleClick = () => {
    setColorArr(getColor());
    setFontArr(getFontFamily());
  };

  useEffect(() => {
    console.log("colorArr", colorArr);
    console.log("fontArr", fontArr);
  }, [colorArr, fontArr]);

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.headerCss}>
        <p className={styles.textCss}>
          사이트에 사용된 색상과 폰트를 조회합니다.
        </p>
        <ClickButton text="조회" onClick={handleClick} />
      </div>
      <div className={styles.arrContainer}>
        <div className={styles.colorListContainer}>
          <MainWidget arr={colorArr} title="색상" type="color" />
        </div>
        <div className={styles.fontListContainer}>
          <MainWidget arr={fontArr} title="폰트" />
        </div>
      </div>
    </div>
  );
};
