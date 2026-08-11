import { style } from "@vanilla-extract/css";

export const copyButtonCss = style({
  backgroundColor: "#9cbc9c",
  color: "#3e5e3e",
  width: "30px",
  height: "20px",
  fontSize: "0.65rem",
  textAlign: "center",
  borderRadius: "5px",
  transition: "background-color 0.25s ease",
  ":hover": {
    backgroundColor: "#769676",
  },
});
