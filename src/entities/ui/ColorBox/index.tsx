import * as styles from "./style.css";

export const ColorBox = ({ hex }: { hex: string }) => {
  return (
    <div
      style={{ backgroundColor: `${hex}` }}
      className={styles.colorBoxStyle}
    ></div>
  );
};
