export const getColor = () => {
  const colors = new Set<string>();

  const rgbToHex = (rgb: string) => {
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);

    return (
      "#" + [r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")
    );
  };

  document.querySelectorAll("*").forEach((e) => {
    const style = getComputedStyle(e);
    const rect = e.getBoundingClientRect();

    // 화면에 표시되지 않는 요소 제외
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      rect.width === 0 ||
      rect.height === 0
    ) {
      return;
    }

    [style.color, style.backgroundColor, style.borderColor].forEach((color) => {
      if (color && color !== "transparent" && color !== "rgba(0, 0, 0, 0)") {
        colors.add(color.startsWith("#") ? color : rgbToHex(color));
      }
    });
  });
  return [...colors];
};
