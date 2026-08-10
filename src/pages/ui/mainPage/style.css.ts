import { style } from "@vanilla-extract/css";

export const mainPageContainer = style({
  width: "500px",
  height: "300px",
  border: "1px solid black",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const arrContainer = style({
  display: "flex",
  flexDirection: "row",
  border: "1px solid black",
});

export const titleCss = style({
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#465446",
});

export const textCss = style({
  fontSize: "0.8rem",
  fontWeight: "400",
  color: "#999",
  letterSpacing: "-0.4px",
});

export const headerCss = style({
  borderBottom: "1px solid #999",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0.2rem",
  justifyContent: "space-between",
});
