import { style } from "@vanilla-extract/css";

export const mainWidgetContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "0.5rem",
  gap: "0.3rem",
  overflow: "scroll",
  height: "100%",
  flex: 1,
  minHeight: 0,
});

export const oneListContainer = style({
  display: "flex",
  flexDirection: "row",
  borderBottom: "1px solid #999",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

export const listTextContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
  flex: 1,
});

export const titleCss = style({
  fontWeight: "600",
  color: "#888",
  marginBottom: "0.5rem",
});
