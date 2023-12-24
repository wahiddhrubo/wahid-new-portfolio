import { ItemPayload, ItemResponse } from "@/types/types";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
const BACKEND_URL = "https://portfolio-backend-azure.vercel.app";

type ContextType = {
  isHovered: boolean;
  setIsHovered: (bool: boolean) => void;
  projectHovered: boolean;
  setProjectHovered: (bool: boolean) => void;
  hoveredText: string;
  setHoveredText: (txt: string) => void;
  borderColor: string;
  newId?: string;
  setBorderColor: (txt: string) => void;
  hamburgerColor: string;
  setHamburgerColor: (txt: string) => void;
  getPrevOrNext: (serial: number) => {};
  getAllWorks: () => {};
  getWorkById: (id: string) => {};
  setNewId: (id: string) => void;
  currentWork?: ItemPayload | null | undefined;
  workList?: ItemPayload[] | null;
  noOfItem: number;
};
export const PortfolioContext = createContext<ContextType>({
  isHovered: false,
  setIsHovered: (bool: boolean) => {},
  projectHovered: false,
  setProjectHovered: (bool: boolean) => {},
  hoveredText: "",
  setHoveredText: (txt: string) => {},
  borderColor: "",
  setBorderColor: (txt: string) => {},
  hamburgerColor: "",
  setHamburgerColor: (txt: string) => {},
  getPrevOrNext: async (serial: number) => {},
  getAllWorks: async () => {},
  getWorkById: async (id: string) => {},
  currentWork: null,
  setNewId: (id: string) => {},
  workList: null,
  noOfItem: 1,
});
type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};
export function PortfolioContextProvider({ children }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState("View Project");
  const [borderColor, setBorderColor] = useState("View Project");
  const [hamburgerColor, setHamburgerColor] = useState("View Project");
  const [newId, setNewId] = useState<string>();
  const [noOfItem, setNoOfItem] = useState<number>(1);

  const [currentWork, setCurrentWork] = useState<
    ItemPayload | null | undefined
  >();
  const [workList, setWorkList] = useState<ItemPayload[]>();

  const getPrevOrNext = async (serial: number) => {
    const { data } = await axios.get(`${BACKEND_URL}/api/v1/next/${serial}`);
    setNewId(data.item[0]._id);
    setNoOfItem(data.noOfItem);
  };
  const getWorkById = async (id: string) => {
    const { data } = await axios.get(`${BACKEND_URL}/api/v1/items/${id}`);
    setCurrentWork(data.item);
    setNoOfItem(data.noOfItem);
  };
  const getAllWorks = async () => {
    const { data } = await axios.get(`${BACKEND_URL}/api/v1/items`);
    if (data.items) {
      setWorkList(data.items);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        isHovered,
        setIsHovered,
        projectHovered,
        setProjectHovered,
        hoveredText,
        setHoveredText,
        borderColor,
        setBorderColor,
        hamburgerColor,
        setHamburgerColor,
        currentWork,
        getPrevOrNext,
        getAllWorks,
        workList,
        getWorkById,
        newId,
        setNewId,
        noOfItem,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
