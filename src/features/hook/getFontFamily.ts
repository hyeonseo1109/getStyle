export const getFontFamily = () => {
  const fonts = new Set<string>();

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

    [style.fontFamily].forEach((font) => {
      fonts.add(font);
    });
  });
  console.log([...fonts]);
};
