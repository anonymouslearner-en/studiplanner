import type { FC } from "react";

interface Props {}
export const ComingUpSection: FC<Props> = () => {
  return (
    <div className="">
      <h2 className="text-black font-sans text-3xl">Coming Up Section</h2>

      <div className="min-h-52 w-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg"></div>
    </div>
  );
};
