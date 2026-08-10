/**
 * rgb 형식의 색상을 넣으면 hex코드 형태로 변환합니다.
 * @param rgb
 * @returns hex
 *
 * @example
 * rgbToHex("rgb(26, 188, 156)")
 * => "#1abc9c"
 */

export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number);

  return (
    "#" + [r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")
  );
};
