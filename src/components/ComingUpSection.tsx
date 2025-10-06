import type { FC } from "react";

interface Props {}
export const ComingUpSection: FC<Props> = () => {
  return (
    <div className="my-5 w-full bg-accent-100 p-4 rounded-xs">
      <h2 className="text-black font-semibold text-3xl mb-4">
        Coming Up Section
      </h2>

      <div className="min-h-52 w-full"></div>
    </div>
  );
};
