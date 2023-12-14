import { ReactNode, createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext({
  isHovered: false,
  setIsHovered: (bool: boolean) => {},
  projectHovered: false,
  setProjectHovered: (bool: boolean) => {},
  hoveredText: "",
  setHoveredText: (txt: string) => {},
});
type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};
export function PortfolioContextProvider({ children }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState("View Project");
  return (
    <PortfolioContext.Provider
      value={{
        isHovered,
        setIsHovered,
        projectHovered,
        setProjectHovered,
        hoveredText,
        setHoveredText,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
