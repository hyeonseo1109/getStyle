import { ClickButton, TestBoxOne } from "@entities/ui";
import { TestBoxTwo } from "@entities/ui";
import { getColor, getFontFamily } from "@features/hook";

export const TestWidget = () => {
  const handleClick = () => {
    getColor();
    getFontFamily();
  };
  return (
    <div>
      <TestBoxOne />
      <TestBoxTwo />
      <ClickButton onClick={handleClick} />
    </div>
  );
};
