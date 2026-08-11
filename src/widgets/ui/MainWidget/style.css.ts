import { style } from "@vanilla-extract/css";

export const mainWidgetContainer = style({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
  width: "100%",
  padding: "0.5rem",
  gap: "0.1rem",
  overflowY: "scroll",
});

export const contentLisContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  // border: "1px solid black",
  height: "100%",
  alignItems: "center",
  borderBottom: "1px solid #999",
});

export const titleCss = style({
  fontWeight: "600",
  color: "#999",
  marginBottom: "0.5rem",
});
