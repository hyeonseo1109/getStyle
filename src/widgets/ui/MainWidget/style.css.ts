import { style } from "@vanilla-extract/css";

export const mainWidgetContainer = style({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
  width: "100%",
  padding: "0.5rem",
  gap: "0.1rem",
  overflow: "scroll",
  // minHeight: "50px",
  height: "100%",
  flex: 1,
  minHeight: 0,
});

export const oneListContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  // border: "1px solid black",
  // height: "100%",
  alignItems: "center",
  borderBottom: "1px solid #999",
});

export const titleCss = style({
  fontWeight: "600",
  color: "#888",
  marginBottom: "0.5rem",
});

// export const headerContainer = style({
//   position: "fixed",
//   backgroundColor: "white",
//   width: "100%",
//   border: "1px solid black",
// });

// export const listContainer = style({
//   paddingTop: "1.8rem",
// });
