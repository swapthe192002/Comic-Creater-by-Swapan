import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Shimmer = () => {
  return (
    <Card className="md:w-[100%/3] lg:w-[100%/5] border-none">
      <CardContent className=" h-[280px] p-[0px]">
        <Skeleton className="h-full w-full rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default Shimmer;
