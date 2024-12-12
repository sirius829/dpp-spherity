import React from 'react';
import Section from './Section';

interface SpecSectionProps {
  title: string;
  children: React.ReactNode;
}

const SpecSection = ({ title, children }: SpecSectionProps) => {
  return (
    <Section title={title} containerClassName="grid gap-4 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2">
      {children}
    </Section>
  );
};

export default SpecSection;
