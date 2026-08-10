import * as styles from "./style.css";

export const MainWidget = ({
  arr,
  title,
}: {
  arr: string[];
  title: string;
}) => {
  return (
    <div className={styles.mainWidgetContainer}>
      <p>{title}</p>
      {arr.map((element) => (
        <div>{element}</div>
      ))}
    </div>
  );
};
