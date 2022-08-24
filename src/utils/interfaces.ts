import { FC } from "react";

//#region Icon interfaces
interface IIconProps32
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  variant?: "32x32_4";
}

interface IIconProps16
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  variant?: "16x16_4";
}

interface IIconProps32_16
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  variant?: "32x32_4" | "16x16_4";
}

export interface IIconComponent
  extends FC<IIconProps32_16 | IIconProps32 | IIconProps16> {}
//#endregion Icon interfaces
