"use client";
import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bubble,
  BubbleContent,
  BubbleDescription,
} from "@/components/ui/bubble";
import Draggable from "react-draggable";
import { ComicData } from "@/lib/interfaces";
import Shimmer from "@/components/Shimmer";
import InstructionDialog from "@/components/InstructionDialog";
import Spinner from "@/components/ui/spinner";
import { BookText, PlusSquare } from "lucide-react";
const SheetForm = lazy(() => import("@/components/SheetForm"));

function DashBoard() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [dialog, setDialog] = useState<boolean>(false);
  const [comic, setComic] = useState<ComicData>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col mt-3">
      <div className="flex flex-row justify-between w-full px-[20px] flex-wrap">
        <div className="flex flex-row  justify-center">
          <img
            src="https://dashtoon.com/static/media/dashtoon-logo.a8078db575978f3185c8.png"
            className="flex h-8 w-8 mr-2"
          />
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            Comic Creator
          </h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setDialog(true);
            }}
          >
            <BookText className="sm:mr-2 h-5 w-5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Instructions</span>
          </Button>
          <InstructionDialog dialog={dialog} setDialog={setDialog} />
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              setIsOpen(true);
            }}
            disabled={loading}
          >
            <PlusSquare className="sm:mr-2 h-5 w-5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Add a comic</span>
          </Button>
        </div>
      </div>
      <Separator className="my-3" orientation="horizontal" />
      {!loading && !comic && (
        <div className="flex justify-center mt-[40vh]">
          <p className="flex justify-center w-full text-md text-muted-foreground">
            Click on Add a comic to get started.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 mx-4 mt-6">
        {comic &&
          comic.cardArray.map((card) => (
            <Card
              key={card.id}
              className="md:w-[100%/3] lg:w-[100%/5] relative"
            >
              <CardContent className=" h-[280px] p-[0px] bg-no-repeat">
                <img
                  className="h-full w-full bg-no-repeat object-cover rounded-lg"
                  src={card.img}
                />
              </CardContent>
              {card.text !== "" && (
                <Draggable bounds="parent">
                  <Bubble
                    className="absolute left-0 top-0"
                    variant={card.bubble}
                  >
                    <BubbleContent>
                      <BubbleDescription>{card.text}</BubbleDescription>
                    </BubbleContent>
                  </Bubble>
                </Draggable>
              )}
            </Card>
          ))}
        {loading && <Shimmer />}
        <Suspense fallback={<Spinner />}>
          <SheetForm
            setLoading={setLoading}
            setComic={setComic}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></SheetForm>
        </Suspense>
      </div>
    </div>
  );
}
export default DashBoard;
