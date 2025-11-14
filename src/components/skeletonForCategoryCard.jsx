import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React from "react";

const SkeletonForCategoryCard = () => {
  return (
    <div className="w-70  border-2 rounded-xl p-2 ">
      <Stack>
        <div className="flex justify-between ">
          <Skeleton variant="rounded" width={120} height={70} />
          <Skeleton
            variant="text"
            width={80}
            height={40}
            className="relative top-3"
          />
        </div>
      </Stack>
    </div>
  );
};

export default SkeletonForCategoryCard;
