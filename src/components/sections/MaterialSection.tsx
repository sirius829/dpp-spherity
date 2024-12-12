import React from 'react';
import Section from './Section';

interface MaterialSectionProps {
  title: string;
  children: React.ReactNode;
}

const MaterialSection = ({ title, children }: MaterialSectionProps) => {
  return (
    <Section title={title} containerClassName="border rounded-lg bg-gray-50 max-w-lg">
      {children}
    </Section>
  );
};

export default MaterialSection;
