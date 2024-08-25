import { FC, PropsWithChildren } from "react";

interface RenderIfProps extends PropsWithChildren {
  condition: boolean;
}

export const RenderIf: FC<RenderIfProps> = ({ condition, children }) => {
  return condition ? children : null;
};
