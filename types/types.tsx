import { type } from "os";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export type Links = {
  url: string;
  name: string;
  readonly id: number;
};
export type SocialLinks = {
  url: string;
  icon?: ReactNode;
  name: string;
  readonly id: number;
};

export type FooterProps = {
  social?: SocialLinks[];
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
  githubLink: string;
  liveLink: string;
  technology: string[];
  workType: string;
  gallery: ImageUri[];
  featuredImage: ImageUri;
  serial: number;
  _id: string;
};

export type ItemResponse = {
  success: boolean;
  item?: ItemPayload;
};
