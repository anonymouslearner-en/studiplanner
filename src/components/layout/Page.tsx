import type { FC, ReactNode } from "react";

interface Props {
  content: ReactNode;
  footer: ReactNode;
  header: ReactNode;
}

export const PageLayout: FC<Props> = ({ content, footer, header }) => {
  return (
    <main>
      {/* Header */}
      {header && <nav className=""> {header}</nav>}

      {/* Content */}
      {content && <main className=""> {content}</main>}

      {/* Footer */}
      {footer && <footer className=""> {footer}</footer>}
    </main>
  );
};
