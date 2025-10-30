import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  persistCenter?: boolean;
}

export const SectionHeading = ({ children, persistCenter = false }: SectionHeadingProps) => {
  return (
    <h2
      className={`text-center text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight ${
        persistCenter ? '' : 'md:text-start'
      }`}
    >
      {children}
    </h2>
  );
};
