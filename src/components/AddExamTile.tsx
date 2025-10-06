import type { FC } from "react";

/**
 * @name AddExamTile
 *
 * @brief
 */
export const AddExamTile: FC = () => {
  return (
    <div className="bg-accent-100 rounded-sm border-dashed border-2 border-neutral-400 flex items-center justify-center cursor-pointer overflow-hidden">
      <p className="text-4xl font-semibold text-gray-800 leading-tight">+</p>
      <p className="font-normal text-base text-neutral-600">Hinzufügen</p>
    </div>
  );
};
