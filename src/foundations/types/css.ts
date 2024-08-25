// Relative Units
export type TEm = "em";
export type TEx = "ex";
export type TCh = "ch";
export type TRem = "rem";
export type TVw = "vw";
export type TVh = "vh";
export type TVMin = "vmin";
export type TVMax = "vmax";
export type TPercentage = "%";

// Absolute Units
export type TCm = "cm";
export type TMm = "mm";
export type TIn = "in";
export type TPx = "px";
export type TPt = "pt";
export type TPc = "pc";

export type TCssUnits =
    | TEm
    | TEx
    | TCh
    | TRem
    | TVw
    | TVh
    | TVMin
    | TVMax
    | TPercentage
    | TPx
    | TPc
    | TPt
    | TIn
    | TMm
    | TCm;

export interface ICSS {
    length: number;
    unit: TCssUnits;
}

export type CSSSize = `${number}${TCssUnits}`;
