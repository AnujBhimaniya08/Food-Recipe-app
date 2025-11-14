import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React from "react";

const SkeletonForRecipe = () => {
  return (
    <div className="">
      <Stack>
        <Skeleton variant="text" className=" mx-auto" width={400} height={40} />
        <div className="flex justify-between mx-auto  mt-6 w-4/12">
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="rounded" width={90} height={30} className="relative top-2" />
        </div>
        <div className="flex justify-between mx-auto gap-4 mt-6">
          <div className="">
            {" "}
            <Skeleton variant="rectangular" width={250} height={255} />
            <Skeleton
              variant="rounded"
              width={150}
              height={40}
              className="my-2 mx-auto"
            />
          </div>

          <Stack>
            <Skeleton variant="text" width={260} height={60} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />
          </Stack>
          <div>
            <Skeleton variant="rounded" className="mb-2" width={350} height={100} />
            <Stack spacing={1}>
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
              <Skeleton variant="text" width={800} />
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default SkeletonForRecipe;
