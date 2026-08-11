import { style } from "@vanilla-extract/css";

export const mainPageContainer = style({
  width: "100%",
  height: "100%",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const arrContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  flex: 1,
  minHeight: 0,
  gap: "0.5rem",
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

export const colorListContainer = style({
  width: "40%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const fontListContainer = style({
  width: "60%",
  height: "100%",
  flexDirection: "column",
  display: "flex",
  borderLeft: "1px solid #aaa",
});

export const titleCss = style({
  fontSize: "1rem",
  color: "#777",
  padding: "0.1rem 0.2rem",
});

export const preFetchDescription = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontSize: "0.9rem",
  marginBottom: "1rem",
  color: "#666",
});
