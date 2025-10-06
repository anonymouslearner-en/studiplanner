import type { FC, ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  action: () => void;
}

/**
 * @name ExamTileActionButton
 */

export const ExamTileActionButton: FC<Props> = ({
  title,
  icon,
  children,
  action,
}) => {
  return (
    <button
      className="p-1 text-transparent !bg-transparent rounded-xs transition-all duration-150"
      title={title}
      onClick={action}
    >
      {icon ?? children}
    </button>
  );
};
