import { Dispatch, SetStateAction } from "react";
export interface Data {
  inputs: string;
}
export interface Comic {
  id: string;
  img: string;
  text: string | null;
  bubble: "left" | "right" | "thinkLeft" | "thinkRight";
}

export interface ComicData {
  cardArray: Comic[];
}

export interface BubbleType {
  id: number;
  val: string;
  type: "left" | "right" | "thinkLeft" | "thinkRight";
}

export interface SheetFormProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setComic: Dispatch<SetStateAction<ComicData | undefined>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface InfoDialogProps {
  setDialog: Dispatch<SetStateAction<boolean>>;
  dialog: boolean;
}
