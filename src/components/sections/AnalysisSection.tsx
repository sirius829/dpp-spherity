import React from 'react';
import Section from './Section';

interface AnalysisSectionProps {
  title: string;
  children: React.ReactNode;
}

const AnalysisSection = ({ title, children }: AnalysisSectionProps) => {
  return (
    <Section title={title} containerClassName="rounded-lg text-base tracking-tight border w-fit overflow-hidden">
      {children}
    </Section>
  );
};

export default AnalysisSection;
