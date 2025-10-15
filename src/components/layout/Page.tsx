import type { FC, ReactNode } from "react";

interface Props {
  footer: ReactNode;
  children: ReactNode;
  header: ReactNode;
}
//ToDo add minimal SEO (FavIcon + Meta tags)
//ToDo shift styling logic here
export const Page: FC<Props> = ({ footer, children, header }) => {
  return (
    <main>
      {/* Header */}
      {header && (
        <nav className="sticky top-0 w-full h-14 shadow-md bg-neutral-100 z-10">
          {header}
        </nav>
      )}

      {/* Content */}
      {children && (
        <main className="min-h-screen bg-accent-300 overflow-x-hidden flex flex-col">
          {" "}
          {children}
        </main>
      )}

      {/* Footer */}
      {footer && (
        <footer className="bg-neutral-700 w-screen min-h-96"> {footer}</footer>
      )}
    </main>
  );
};
