import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const SkeletonforDishCard = () => {
  return (
    <div className="border-2 w-85 rounded-xl h-100 p-2 ">
      <Stack spacing={1}>
        <div className="relative left-9">
          {" "}
          <Skeleton variant="rounded" width={250} className="mt-2" height={250} />
          {/* for image */}
          <Skeleton
            variant="text"
            className=""
            width={250}
            sx={{ fontSize: "2rem" }}
          />
          {/* for dish name */}
        </div>

        <div className="flex justify-center gap-20 ">
          <Skeleton
            variant="rounded"
            className="relative top-3"
            width={120}
            height={40}
          />
          <Skeleton variant="circular" width={60} height={60} />
        </div>
      </Stack>
    </div>
  );
};

export default SkeletonforDishCard;
