import { ReactNode } from "react";
import { IconType } from "react-icons";

export type Links = {
  url: string;
  name: string;
  readonly id: number;
};
export type SocialLinks = {
  url: string;
  icon: ReactNode;
  readonly id: number;
};
