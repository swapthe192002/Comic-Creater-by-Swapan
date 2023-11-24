import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { InfoDialogProps } from "@/lib/interfaces";
import { comicSteps } from "@/constants/data";

const InstructionDialog: React.FC<InfoDialogProps> = ({
  dialog,
  setDialog,
}) => {
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>
            Refer to the instructions and get started
          </DialogDescription>
        </DialogHeader>
        <div>
          <ul className="my-4 ml-6 list-disc text-sm [&>li]:mt-1">
            {comicSteps.map((step, index) => (
              <li key={index + 1}>
                {step}
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InstructionDialog;
