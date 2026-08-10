import { style } from "@vanilla-extract/css";

export const buttonCss = style({
  backgroundColor: "#699d69",
  // backgroundColor: "#699d69",
  color: "white",
  width: "40px",
  height: "25px",
  fontSize: "0.8rem",
  textAlign: "center",
  borderRadius: "5px",
  transition: "background-color 0.25s ease",
  ":hover": {
    backgroundColor: "#528552",
  },
});
