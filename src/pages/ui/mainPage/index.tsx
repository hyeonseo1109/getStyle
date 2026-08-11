import { MainWidget } from "@widgets/ui";
import * as styles from "./style.css";
import { ClickButton } from "@entities/ui";
import { getColor, getFontFamily } from "@features/hook";
import { useState } from "react";

export const MainPage = () => {
  const [colorArr, setColorArr] = useState<string[]>([]);
  const [fontArr, setFontArr] = useState<string[]>([]);

  const handleClick = () => {
    setColorArr(getColor());
    setFontArr(getFontFamily());
  };

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.headerCss}>
        <p className={styles.textCss}>
          사이트에 사용된 색상과 폰트를 조회합니다.
        </p>
        <ClickButton text="조회" onClick={handleClick} />
      </div>
      {colorArr.length === 0 || fontArr.length === 0 ? (
        <div className={styles.preFetchDescription}>조회버튼을 눌러주세요.</div>
      ) : (
        <div className={styles.arrContainer}>
          <div className={styles.colorListContainer}>
            <p className={styles.titleCss}>[ 색상 ]</p>
            <MainWidget arr={colorArr} type="color" />
          </div>
          <div className={styles.fontListContainer}>
            <p className={styles.titleCss}>[ 폰트 ]</p>
            <MainWidget arr={fontArr} />
          </div>
        </div>
      )}
    </div>
  );
};
