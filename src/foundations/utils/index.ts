import { colorosPalette } from "../colors";
import { CSSSize } from "../types/css";

type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

type Args = {
  color?: string;
  width?: CSSSize;
  style?: BorderStyle;
  radius?: CSSSize;
  border?:
    | "border"
    | "border-top"
    | "border-right"
    | "border-bottom"
    | "border-left";
};
type SetBoorder = (args?: Args) => string;

const { border } = colorosPalette;

const STYLE = "solid";
const WIDTH = "1px";
const REDIUS = "6px";
const COLOR = border;
const BORDER = "border";

const DEFAULTS: Args = {
  color: COLOR,
  width: WIDTH,
  style: STYLE,
  radius: REDIUS,
  border: BORDER,
};

export const setBorder: SetBoorder = (args = DEFAULTS) => {
  const {
    color = COLOR,
    width = WIDTH,
    style = STYLE,
    radius = REDIUS,
    border = BORDER,
  } = args;
  return `
        ${border}: ${width} ${style} ${color};
        border-radius: ${radius};
    `;
};

export const setBorderRadius = (radius: CSSSize = REDIUS) =>
  setBorder({ radius, width: "0px" });
