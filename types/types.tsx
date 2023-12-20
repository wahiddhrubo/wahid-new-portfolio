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

export type SlideProps = {
  title: string;
  img: string;
  type: "Web" | "Android";
  description: string;
};

export type WorkProps = {
  title: string;
  img: string;
  type: "Web" | "Android";
};
export type ImageUri = {
  public_id: string;
  url: string;
  created_at: Date;
};

export type ItemPayload = {
  title: string;
  description: string;
  type: string;
  workType: string;
  gallery: ImageUri[];
  featuredImage: ImageUri;
  _id: string;
};

export type ItemResponse = {
  success: boolean;
  item?: ItemPayload;
};
