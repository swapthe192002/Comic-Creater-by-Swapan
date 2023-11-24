import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Spinner = () => (
  <div className="flex justify-center mt-[20vh]">
    <Loader2 className=" mr-2 h-10 w-10 animate-spin" />
  </div>
);

export default Spinner;
