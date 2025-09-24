import type { FC } from "react";

interface Props {}
export const OverviewSection: FC<Props> = () => {
  return (
    <div className="my-5">
      <h2 className="text-black font-sans text-3xl">Overview Section</h2>

      <div className="min-h-96 w-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
        I
      </div>
    </div>
  );
};
