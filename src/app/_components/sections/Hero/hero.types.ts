import { ReactNode } from "react";

export type IconConfig = {
  icon: ReactNode;
  position: string;
};

export type FloatingIconProps = {
    icon: ReactNode;
    className: string;
}

export type BackgroundProps = {
    icons: { icon: ReactNode; position: string; }[];
}

