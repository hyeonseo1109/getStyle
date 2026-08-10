import * as styles from "./style.css";

export const ClickButton = ({
  onClick,
  text = "→",
}: {
  onClick?: () => void;
  text?: string;
}) => {
  return (
    <button className={styles.buttonCss} onClick={onClick}>
      {text}
    </button>
  );
};
